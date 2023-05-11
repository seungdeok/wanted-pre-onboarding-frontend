export const ROUTE_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MYPAGE: '/users',
} as const;

export type ROUTE_PATH = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
