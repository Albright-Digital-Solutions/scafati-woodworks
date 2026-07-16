import type { IncomingMessage, ServerResponse } from 'node:http';
import { jobberGraphql } from './_client.js';

type TypeRef = { kind: string; name: string | null; ofType?: TypeRef | null };

type SchemaResult = {
  mutation: {
    fields: Array<{
      name: string;
      args: Array<{ name: string; type: TypeRef }>;
      type: TypeRef;
    }>;
  } | null;
  clientInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
  requestInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
  requestNoteInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
  requestPayload: { fields: Array<{ name: string; type: TypeRef }> } | null;
  clientPayload: { fields: Array<{ name: string; type: TypeRef }> } | null;
  phoneInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
  emailInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
  requestDetailsInput: { inputFields: Array<{ name: string; type: TypeRef }> } | null;
};

export default async function handler(_request: IncomingMessage, response: ServerResponse) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    const data = await jobberGraphql<SchemaResult>(`query MutationSchema {
      mutation: __type(name: "Mutation") {
        fields {
          name
          args { name type { kind name ofType { kind name ofType { kind name } } } }
          type { kind name ofType { kind name } }
        }
      }
      clientInput: __type(name: "ClientCreateInput") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
      requestInput: __type(name: "RequestCreateInput") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
      requestNoteInput: __type(name: "RequestCreateNoteInput") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
      requestPayload: __type(name: "RequestCreatePayload") {
        fields { name type { kind name ofType { kind name } } }
      }
      clientPayload: __type(name: "ClientCreatePayload") {
        fields { name type { kind name ofType { kind name } } }
      }
      phoneInput: __type(name: "PhoneNumberCreateAttributes") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
      emailInput: __type(name: "EmailCreateAttributes") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
      requestDetailsInput: __type(name: "RequestDetailsInput") {
        inputFields { name type { kind name ofType { kind name ofType { kind name } } } }
      }
    }`);

    const fields = data.mutation?.fields.filter((field) => /^(clientCreate|requestCreate)$/i.test(field.name)) || [];
    response.statusCode = 200;
    response.end(JSON.stringify({
      authenticated: true,
      fields,
      clientInput: data.clientInput,
      requestInput: data.requestInput,
      requestNoteInput: data.requestNoteInput,
      requestPayload: data.requestPayload,
      clientPayload: data.clientPayload,
      phoneInput: data.phoneInput,
      emailInput: data.emailInput,
      requestDetailsInput: data.requestDetailsInput,
    }));
  } catch (error) {
    response.statusCode = 500;
    response.end(JSON.stringify({ authenticated: false, error: error instanceof Error ? error.message : 'Schema check failed' }));
  }
}
