import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';

export const Footer = () => {
  return (
    <footer css={footerWrap}>
      <div>{'Copyright 2023. All rights reserved.\njeong9132@gmail.com'}</div>
    </footer>
  );
};

const footerWrap = css`
  white-space: pre-wrap;
  text-align: center;
  padding: 36px 0;
  line-height: 2;
  color: ${COLORS.text2};
  border-top: 1px solid ${COLORS.lightGrey2};
`;
