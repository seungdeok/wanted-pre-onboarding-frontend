import { css } from '@emotion/react';
import { HyperLink, Args as HyperLinkArgs } from '../HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { DEVICE_SIZES } from '@/styles/theme';

interface Props {
  isLoggedIn: boolean;
}

export const HEADER_HEIGHT = 52;

export const Header = ({ isLoggedIn }: Props) => {
  const itemList = [
    isLoggedIn
      ? {
          label: '로그아웃',
          redirectPath: ROUTE_PATH.SIGNIN,
        }
      : {
          label: '로그인',
          redirectPath: ROUTE_PATH.SIGNIN,
        },
  ];

  return (
    <header css={headerWrap}>
      <div css={headerContentWrap}>
        <HyperLink redirectPath={ROUTE_PATH.HOME}>
          <div>로고</div>
        </HyperLink>
        <nav>
          <ul>
            {itemList.map((item: HyperLinkArgs) => {
              return (
                <li key={item.redirectPath}>
                  <HyperLink redirectPath={item.redirectPath}>
                    {item.label}
                  </HyperLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerWrap = css`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const headerContentWrap = css`
  width: 100%;
  height: 100%;
  max-width: ${DEVICE_SIZES.pc}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const logoWrap = css``;

const itemListWrap = css``;

const itemWrap = css``;
