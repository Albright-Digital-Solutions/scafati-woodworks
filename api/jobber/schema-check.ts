import type { IncomingMessage, ServerResponse } from 'node:http';
import { jobberGraphql } from './_client.js';

type TypeRef = { kind: string; name: string | null; ofType?: TypeRef | null };

type SchemaResult = {
  __type: {
    fields: Array<{
      name: string;
      args: Array<{ name: string; type: TypeRef }>;
      type: TypeRef;
    }>;
  } | null;
};

export default async function handler(_request: IncomingMessage, response: ServerResponse) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    const data = await jobberGraphql<SchemaResult>(`query MutationSchema {
      __type(name: "Mutation") {
        fields {
          name
          args { name type { kind name ofType { kind name ofType { kind name } } } }
          type { kind name ofType { kind name } }
        }
      }
    }`);

    const fields = data.__type?.fields.filter((field) => /^(client|request)/i.test(field.name)) || [];
    response.statusCode = 200;
    response.end(JSON.stringify({ authenticated: true, fields }));
  } catch (error) {
    response.statusCode = 500;
    response.end(JSON.stringify({ authenticated: false, error: error instanceof Error ? error.message : 'Schema check failed' }));
  }
}

