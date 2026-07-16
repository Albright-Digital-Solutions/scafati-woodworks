import type { IncomingMessage, ServerResponse } from 'node:http';
import { jobberGraphql } from './_client.js';

type QuoteRequest = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  details?: unknown;
  smsOptIn?: unknown;
  sourcePage?: unknown;
  website?: unknown;
};

type UserError = { message: string; path?: string[] };

const PROJECT_NAMES: Record<string, string> = {
  'custom-cabinets': 'Custom Cabinets',
  'built-ins': 'Built-Ins',
  'entertainment-center': 'Entertainment Center',
  pantry: 'Custom Pantry System',
  mudroom: 'Mudroom Storage',
  laundry: 'Laundry Room Cabinets',
  vanity: 'Bathroom Vanity',
  'doors-fronts': 'Cabinet Doors & Drawer Fronts',
  refacing: 'Cabinet Refacing',
  shelves: 'Floating Shelves',
  'accent-wall': 'Accent Wall',
  lattice: 'Lattice Wall Panels',
  trim: 'Custom Trim Work',
  other: 'Other / Custom Project',
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

async function readJson(request: IncomingMessage) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 20_000) throw new Error('Request is too large');
  }
  return JSON.parse(body || '{}') as QuoteRequest;
}

function send(response: ServerResponse, status: number, body: Record<string, unknown>) {
  response.statusCode = status;
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(body));
}

function throwUserErrors(errors: UserError[], operation: string) {
  if (errors.length) throw new Error(`${operation}: ${errors.map((error) => error.message).join('; ')}`);
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    send(response, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const submission = await readJson(request);

    // Honeypot: silently accept bot submissions without sending them to Jobber.
    if (clean(submission.website, 200)) {
      send(response, 200, { ok: true });
      return;
    }

    const firstName = clean(submission.firstName, 80);
    const lastName = clean(submission.lastName, 80);
    const email = clean(submission.email, 160).toLowerCase();
    const phone = clean(submission.phone, 40);
    const projectType = clean(submission.projectType, 80);
    const details = clean(submission.details, 4_000);
    const sourcePage = clean(submission.sourcePage, 300) || '/contact';
    const smsOptIn = submission.smsOptIn === true;

    if (!firstName || !lastName || !details || !/^\S+@\S+\.\S+$/.test(email)) {
      send(response, 400, { ok: false, error: 'Please complete all required fields.' });
      return;
    }

    const clientData = await jobberGraphql<{
      clientCreate: { client: { id: string } | null; userErrors: UserError[] };
    }>(`mutation CreateWebsiteClient($input: ClientCreateInput!) {
      clientCreate(input: $input) {
        client { id }
        userErrors { message path }
      }
    }`, {
      input: {
        firstName,
        lastName,
        emails: [{ address: email, primary: true }],
        ...(phone ? { phones: [{ number: phone, primary: true, smsAllowed: smsOptIn }] } : {}),
      },
    });

    throwUserErrors(clientData.clientCreate.userErrors, 'Unable to create client');
    const clientId = clientData.clientCreate.client?.id;
    if (!clientId) throw new Error('Jobber did not return the new client');

    const projectName = PROJECT_NAMES[projectType] || 'Website Quote Request';
    const requestData = await jobberGraphql<{
      requestCreate: { request: { id: string } | null; userErrors: UserError[] };
    }>(`mutation CreateWebsiteRequest($input: RequestCreateInput!) {
      requestCreate(input: $input) {
        request { id }
        userErrors { message path }
      }
    }`, {
      input: { clientId, title: `${projectName} — Website Inquiry` },
    });

    throwUserErrors(requestData.requestCreate.userErrors, 'Unable to create request');
    const requestId = requestData.requestCreate.request?.id;
    if (!requestId) throw new Error('Jobber did not return the new request');

    const note = [
      `Project type: ${projectName}`,
      `Project details: ${details}`,
      `SMS consent: ${smsOptIn ? 'Yes' : 'No'}`,
      `Submitted from: https://www.scafatiwoodworks.com${sourcePage.startsWith('/') ? sourcePage : `/${sourcePage}`}`,
    ].join('\n\n');

    const noteData = await jobberGraphql<{
      requestCreateNote: { request: { id: string } | null; userErrors: UserError[] };
    }>(`mutation AddWebsiteRequestNote($requestId: EncodedId!, $input: RequestCreateNoteInput!) {
      requestCreateNote(requestId: $requestId, input: $input) {
        request { id }
        userErrors { message path }
      }
    }`, {
      requestId,
      input: { message: note, pinned: true },
    });

    throwUserErrors(noteData.requestCreateNote.userErrors, 'Unable to add request details');
    send(response, 200, { ok: true });
  } catch (error) {
    console.error('Jobber quote request failed', error instanceof Error ? error.message : error);
    send(response, 500, { ok: false, error: 'We could not send your request. Please call (817) 403-6044 or try again.' });
  }
}

