export const ROUTE_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TODO: '/todo',
} as const;

export type ROUTE_PATH = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
