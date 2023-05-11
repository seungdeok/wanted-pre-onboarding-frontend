export const SSR_STALE_TIME = 1000 * 60;

export const QUERY_KEYS = {
  INFO: '/info',
} as const;

export type QUERY_KEYS = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS];
