import { AuthForm } from '@/components/auth/AuthForm';
import { AuthLayout } from '@/components/auth/Layout';
import { HyperLink } from '@/components/common/HyperLink';
import { ROUTE_PATH } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import { useInput } from '@/hooks/useInput';
import { AuthService } from '@/services/AuthService';
import { COLORS } from '@/styles/theme';
import { validateEmail, validatePassword } from '@/utils/validator';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const INITIAL_TEXT = '';
export const SignupView = () => {
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

    const data = await AuthService.signup({ email, password });
    if (data.data.message) {
      setIsLoading(false);
      return alert(data.data.message);
    }

    alert('회원가입되었습니다');
    router.push(ROUTE_PATH.SIGNIN);
  };

  useAuth();

  return (
    <AuthLayout>
      <h1 css={title}>회원가입</h1>
      <div css={formWrap}>
        <AuthForm
          isLoading={isLoading}
          formType="signup"
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
