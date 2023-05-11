import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Header, HEADER_HEIGHT } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { COLORS, DEVICE_SIZES } from '@/styles/theme';

interface Props {
  children: ReactNode;
  isLoggedIn?: boolean;
}

export const Layout = ({ children, isLoggedIn = false }: Props) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main css={layoutWrap}>
        <section css={layoutContentWrap}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

const layoutWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT}px;
  background-color: ${COLORS.grey1};
`;

const layoutContentWrap = css`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  width: 100%;
  max-width: ${DEVICE_SIZES.pc}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
