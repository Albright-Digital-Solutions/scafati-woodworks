import type { IncomingMessage, ServerResponse } from 'node:http';
import { authorizationUrl } from './_oauth.js';

export default function handler(_request: IncomingMessage, response: ServerResponse) {
  try {
    response.statusCode = 302;
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('Location', authorizationUrl());
    response.end();
  } catch (error) {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end(error instanceof Error ? error.message : 'Unable to start Jobber authorization');
  }
}

