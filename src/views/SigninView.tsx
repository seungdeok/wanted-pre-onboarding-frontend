import { AuthLayout } from '@/components/auth/Layout';
import { SigninForm } from '@/components/auth/SigninForm';
import { HyperLink } from '@/components/common/HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';

export const SigninView = () => {
  return (
    <AuthLayout>
      <h1 css={title}>로그인</h1>
      <div css={formWrap}>
        <SigninForm />
      </div>
      <div css={linkWrap}>
        계정이 없으신가요?
        <HyperLink redirectPath={ROUTE_PATH.SIGNUP}>회원가입</HyperLink>
      </div>
    </AuthLayout>
  );
};

const title = css`
  font-weight: 700;
  font-size: 24px;
  color: ${COLORS.text1};
  text-align: center;
`;

const formWrap = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 64px;
`;

const linkWrap = css`
  margin-top: 48px;
  color: ${COLORS.text1};
  text-align: center;

  a {
    padding-left: 4px;
  }
`;
