import { css } from '@emotion/react';
import { HyperLink, Args as HyperLinkArgs } from '../HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { DEVICE_SIZES } from '@/styles/theme';
import { usePopup } from '@/hooks/usePopup';
import { useRouter } from 'next/router';
import { AuthService } from '@/services/AuthService';

interface Props {
  isLoggedIn: boolean;
}

export const HEADER_HEIGHT = 52;

export const Header = ({ isLoggedIn }: Props) => {
  const router = useRouter();
  const { open, close } = usePopup();
  // const itemList = [
  //   {
  //     label: '메뉴',
  //     redirectPath: ROUTE_PATH.HOME,
  //   }
  // ];

  const handleLogout = () => {
    const onApprove = () => {
      AuthService.signout();
      router.push(ROUTE_PATH.SIGNIN);
      close();
    };
    open('confirm', '로그아웃 하시겠습니까?', onApprove);
  };

  return (
    <header css={headerWrap}>
      <div css={headerContentWrap}>
        <HyperLink redirectPath={ROUTE_PATH.HOME}>
          <div>로고</div>
        </HyperLink>
        <nav>
          <ul>
            {/* {itemList.map((item: HyperLinkArgs) => {
              return (
                <li key={item.redirectPath}>
                  <HyperLink redirectPath={item.redirectPath}>
                    {item.label}
                  </HyperLink>
                </li>
              );
            })} */}
            <li>
              {isLoggedIn ? (
                <button css={touchArea} onClick={handleLogout} type="button">
                  로그아웃
                </button>
              ) : (
                <HyperLink redirectPath={ROUTE_PATH.SIGNIN}>로그인</HyperLink>
              )}
            </li>
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

const touchArea = css`
  min-width: 44px;
  min-height: 44px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
