const TOKEN_URL = 'https://api.getjobber.com/api/oauth/token';
const GRAPHQL_URL = 'https://api.getjobber.com/api/graphql';

function requiredEnv(name: 'JOBBER_CLIENT_ID' | 'JOBBER_CLIENT_SECRET' | 'JOBBER_REFRESH_TOKEN') {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

export async function getAccessToken() {
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: requiredEnv('JOBBER_CLIENT_ID'),
      client_secret: requiredEnv('JOBBER_CLIENT_SECRET'),
      grant_type: 'refresh_token',
      refresh_token: requiredEnv('JOBBER_REFRESH_TOKEN'),
    }),
  });

  const result = await response.json() as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!response.ok || !result.access_token) {
    throw new Error(result.error_description || result.error || 'Unable to refresh Jobber access');
  }

  return result.access_token;
}

export async function jobberGraphql<T>(query: string, variables?: Record<string, unknown>) {
  const accessToken = await getAccessToken();
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-JOBBER-GRAPHQL-VERSION': '2025-04-16',
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json() as { data?: T; errors?: Array<{ message: string }> };
  if (!response.ok || result.errors?.length || !result.data) {
    throw new Error(result.errors?.map((error) => error.message).join('; ') || 'Jobber API request failed');
  }

  return result.data;
}

