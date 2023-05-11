export const STORAGE_KEYS = {
  token: 'token',
} as const;

export type STORAGE_KEYS = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
