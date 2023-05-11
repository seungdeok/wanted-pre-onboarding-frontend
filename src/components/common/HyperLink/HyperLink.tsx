import { css } from '@emotion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  redirectPath: string;
}

export interface Args {
  label: string;
  redirectPath: string;
}

export const HyperLink = ({ children, redirectPath }: Props) => {
  return (
    <div css={touchAreaWrap}>
      <Link href={redirectPath}>{children}</Link>
    </div>
  );
};

const touchAreaWrap = css`
  min-width: 44px;
  min-height: 44px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
