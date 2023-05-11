import { AuthForm } from '@/components/auth/AuthForm';
import { AuthLayout } from '@/components/auth/Layout';
import { HyperLink } from '@/components/common/HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';

export const SignupView = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <AuthLayout>
      <h1 css={title}>회원가입</h1>
      <div css={formWrap}>
        <AuthForm formType="signin" onSubmit={handleSubmit} />
      </div>
      <div css={linkWrap}>
        이미 계정이 있으신가요?
        <HyperLink redirectPath={ROUTE_PATH.SIGNIN}>로그인</HyperLink>
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
