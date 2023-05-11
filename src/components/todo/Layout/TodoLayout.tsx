import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Layout } from '@/components/common/Layout';
import { COLORS } from '@/styles/theme';

interface Props {
  children: ReactNode;
}

export const TodoLayout = ({ children }: Props) => {
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
  padding: ${BOX_PADDING}px;
`;

const cardWrap = css`
  width: 100%;
`;
