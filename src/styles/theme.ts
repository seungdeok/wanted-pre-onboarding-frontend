export const DEVICE_SIZES = {
  mobile: 320, // iPhone 5/SE
  tablet: 758, // ipad
  pc: 1024,
} as const;

export const Z_INDEX = {
  header: 2,
};

export const COLORS = {
  white: '#fff',
  black: '#000',
  lightGrey1: '#F9FBFC',
  lightGrey2: '#EBEDF0',
  lightGrey3: '#D7DBE0',
  lightGrey4: '#A9B0BA',
  grey1: '#F5F6F7',
  grey2: '#EDF0F2',
  grey3: '#E6EAED',
  text1: '#222',
  text2: '#444',
  primary: '#006AFF',
  primaryHover: '#599EFF',
  secondary: '#EBEDF0',
  secondaryHover: '#F4F5F7',
  statusFailure: '#f44336',
  statusSuccess: '#00b248',
} as const;

export const MIDIA_QUERY = {
  mobile: `screen and (max-width: ${DEVICE_SIZES.mobile})`,
  tablet: `screen and (max-width: ${DEVICE_SIZES.tablet})`,
} as const;

export type DEVICE_SIZES = (typeof DEVICE_SIZES)[keyof typeof DEVICE_SIZES];
export type COLORS = (typeof COLORS)[keyof typeof COLORS];
export type MIDIA_QUERY = (typeof MIDIA_QUERY)[keyof typeof MIDIA_QUERY];
