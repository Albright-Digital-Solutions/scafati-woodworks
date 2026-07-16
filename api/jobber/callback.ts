import type { IncomingMessage, ServerResponse } from 'node:http';
import { exchangeAuthorizationCode, verifyState } from './_oauth.js';

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
}

function page(title: string, content: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <title>${escapeHtml(title)}</title>
    <style>
      body{margin:0;background:#f7f3eb;color:#2c2119;font:16px/1.55 system-ui,sans-serif}
      main{max-width:720px;margin:8vh auto;padding:32px;background:#fff;border:1px solid #e5ddd1;border-radius:16px}
      h1{font-family:Georgia,serif} code{display:block;padding:16px;margin:16px 0;background:#f3eee5;border-radius:8px;overflow-wrap:anywhere}
      .warning{color:#8a3f18} ol{padding-left:22px}
    </style>
  </head>
  <body><main>${content}</main></body>
</html>`;
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  response.setHeader('Cache-Control', 'no-store, private');
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    const url = new URL(request.url || '/', 'https://www.scafatiwoodworks.com');
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code || !state || !verifyState(state)) {
      response.statusCode = 400;
      response.end(page('Authorization failed', '<h1>Authorization failed</h1><p>The authorization link is missing information or has expired. Start the connection again.</p>'));
      return;
    }

    const tokens = await exchangeAuthorizationCode(code);
    const refreshToken = escapeHtml(tokens.refresh_token!);
    response.statusCode = 200;
    response.end(page('Jobber connected', `
      <h1>Jobber authorization succeeded</h1>
      <p>Add the following final environment variable in Vercel:</p>
      <p><strong>Key:</strong> <code>JOBBER_REFRESH_TOKEN</code></p>
      <p><strong>Value:</strong></p>
      <code>${refreshToken}</code>
      <p class="warning"><strong>Treat this value like a password.</strong> Do not send it in chat, email, or screenshots.</p>
      <ol>
        <li>Add it to Production and Preview in Vercel with Sensitive enabled.</li>
        <li>Redeploy the website.</li>
        <li>Close this page.</li>
      </ol>
    `));
  } catch (error) {
    response.statusCode = 500;
    response.end(page('Authorization failed', `<h1>Authorization failed</h1><p>${escapeHtml(error instanceof Error ? error.message : 'Unable to complete Jobber authorization')}</p>`));
  }
}

