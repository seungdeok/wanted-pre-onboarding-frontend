import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Layout } from '@/components/common/Layout';
import { COLORS } from '@/styles/theme';

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Layout>
      <section css={layoutWrap}>
        <div css={cardWrap}>{children}</div>
      </section>
    </Layout>
  );
};

const BOX_PADDING = 64;

const layoutWrap = css`
  margin: 100px 0;
  height: 100%;
  width: calc(448px - ${BOX_PADDING * 2}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.grey1};
  box-shadow: -24px -24px 48px ${COLORS.white},
    24px 24px 48px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: ${BOX_PADDING}px;
`;

const cardWrap = css`
  width: 100%;
`;
