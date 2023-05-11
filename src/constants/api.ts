export const BASE_URL = 'http://localhost:3000/api';

export const API_PATH = {
  INFO: '/info',
} as const;

export const API_URL = {
  INFO: BASE_URL + API_PATH.INFO,
} as const;

export type API_PATH = (typeof API_PATH)[keyof typeof API_PATH];
export type API_URL = (typeof API_URL)[keyof typeof API_URL];
