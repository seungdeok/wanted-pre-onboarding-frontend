import { isClient } from '@/utils/isClient';
// import { AuthService } from '@/services/authService';

interface RequestOptions {
  url: string;
  body?: object;
  headers?: object;
}

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IClient {
  get: ({ url, headers }: RequestOptions) => Promise<any>;
  post: ({ url, body, headers }: RequestOptions) => Promise<any>;
  put: ({ url, body, headers }: RequestOptions) => Promise<any>;
  delete: ({ url, headers }: RequestOptions) => Promise<any>;
}

const request = async (
  method: Methods,
  url: string,
  body?: object,
  headers: object = {},
) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const res = await fetch(url, options);

  if (
    res.headers.get('content-type') &&
    res.headers.get('content-type')?.indexOf('application/json') !== -1
  ) {
    const data = await res.json();
    return {
      statusCode: res.status,
      data,
    };
  }

  return {
    statusCode: res.status,
  };
};

export const client: IClient = {
  get: async ({ url, headers = {} }: RequestOptions) =>
    request('GET', url, undefined, headers),
  post: async ({ url, body = {}, headers = {} }: RequestOptions) =>
    request('POST', url, body, headers),
  put: async ({ url, body = {}, headers = {} }: RequestOptions) =>
    request('PUT', url, body, headers),
  delete: async ({ url, headers = {} }: RequestOptions) =>
    request('DELETE', url, undefined, headers),
};
