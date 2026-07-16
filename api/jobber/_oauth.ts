import { createHmac, timingSafeEqual } from 'node:crypto';

const AUTHORIZE_URL = 'https://api.getjobber.com/api/oauth/authorize';
const TOKEN_URL = 'https://api.getjobber.com/api/oauth/token';
const STATE_TTL_MS = 10 * 60 * 1000;

function requiredEnv(name: 'JOBBER_CLIENT_ID' | 'JOBBER_CLIENT_SECRET' | 'JOBBER_REDIRECT_URI') {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function sign(payload: string) {
  return createHmac('sha256', requiredEnv('JOBBER_CLIENT_SECRET'))
    .update(payload)
    .digest('base64url');
}

export function createState() {
  const payload = Buffer.from(JSON.stringify({ issuedAt: Date.now() })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function verifyState(state: string) {
  const [payload, providedSignature] = state.split('.');
  if (!payload || !providedSignature) return false;

  const expectedSignature = sign(payload);
  const expected = Buffer.from(expectedSignature);
  const provided = Buffer.from(providedSignature);
  if (expected.length !== provided.length || !timingSafeEqual(expected, provided)) return false;

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as { issuedAt?: number };
    return typeof parsed.issuedAt === 'number' && Date.now() - parsed.issuedAt <= STATE_TTL_MS;
  } catch {
    return false;
  }
}

export function authorizationUrl() {
  const url = new URL(AUTHORIZE_URL);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('client_id', requiredEnv('JOBBER_CLIENT_ID'));
  url.searchParams.set('redirect_uri', requiredEnv('JOBBER_REDIRECT_URI'));
  url.searchParams.set('state', createState());
  return url.toString();
}

export async function exchangeAuthorizationCode(code: string) {
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: requiredEnv('JOBBER_CLIENT_ID'),
      client_secret: requiredEnv('JOBBER_CLIENT_SECRET'),
      grant_type: 'authorization_code',
      code,
      redirect_uri: requiredEnv('JOBBER_REDIRECT_URI'),
    }),
  });

  const result = await response.json() as {
    access_token?: string;
    refresh_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!response.ok || !result.refresh_token) {
    throw new Error(result.error_description || result.error || 'Jobber did not return a refresh token');
  }

  return result;
}

