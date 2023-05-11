export const ROUTE_PATH = {
  HOME: '/',
  SIGNIN: '/accounts/signin',
  SIGNUP: '/accounts/signup',
  MYPAGE: '/users',
} as const;

export type ROUTE_PATH = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
