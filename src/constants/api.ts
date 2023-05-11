export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const API_PATH = {
  auth: '/auth',
  todos: '/todos',
} as const;

export const API_URL = {
  auth: BASE_URL + API_PATH.auth,
  todos: BASE_URL + API_PATH.todos,
} as const;

export type API_PATH = (typeof API_PATH)[keyof typeof API_PATH];
export type API_URL = (typeof API_URL)[keyof typeof API_URL];
