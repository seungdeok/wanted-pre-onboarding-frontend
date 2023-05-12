import { useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { AuthLayout } from '@/components/auth/Layout';
import { AuthForm } from '@/components/auth/AuthForm';
import { HyperLink } from '@/components/common/HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/AuthService';
import { validateEmail, validatePassword } from '@/utils/validator';
import { useInput } from '@/hooks/useInput';
import { COLORS } from '@/styles/theme';

const INITIAL_TEXT = '';
export const SigninView = () => {
  const [email, emailErrorMsg, onChangeEmail, onBlurEmail] = useInput(
    INITIAL_TEXT,
    validateEmail,
  );
  const [password, passwordErrorMsg, onChangePassword, onBlurPassword] =
    useInput(INITIAL_TEXT, validatePassword);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) return;
    setIsLoading(true);

    const data = await AuthService.signin({ email, password });
    if (data.data.message) {
      setIsLoading(false);
      return alert(data.data.message);
    }

    router.push(ROUTE_PATH.TODO);
  };

  useAuth();

  return (
    <AuthLayout>
      <h1 css={title}>로그인</h1>
      <div css={formWrap}>
        <AuthForm
          isLoading={isLoading}
          formType="signin"
          onSubmit={handleSubmit}
          email={email}
          emailErrorMsg={emailErrorMsg}
          onChangeEmail={onChangeEmail}
          onBlurEmail={onBlurEmail}
          password={password}
          passwordErrorMsg={passwordErrorMsg}
          onChangePassword={onChangePassword}
          onBlurPassword={onBlurPassword}
        />
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
