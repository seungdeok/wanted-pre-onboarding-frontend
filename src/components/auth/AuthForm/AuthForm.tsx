import { LoadingButton } from '@/components/common/LoadingButton';
import { AuthTextInput } from '../TextInput';
import { css } from '@emotion/react';
import { COLORS } from '@/styles/theme';
import { useInput } from '@/hooks/useInput';
import { validateEmail, validatePassword } from '@/utils/validator';
import { useState } from 'react';

const INITIAL_TEXT = '';

interface Props {
  formType: 'signin' | 'signup';
  onSubmit: (email: string, password: string) => void;
}

export const AuthForm = ({ formType, onSubmit }: Props) => {
  const [email, emailErrorMsg, onChangeEmail, onBlurEmail] = useInput(
    INITIAL_TEXT,
    validateEmail,
  );
  const [password, passwordErrorMsg, onChangePassword, onBlurPassword] =
    useInput(INITIAL_TEXT, validatePassword);

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    if (email && password) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
      onSubmit(email, password);
    }
  };

  return (
    <div>
      <AuthTextInput
        dataTestId="email-input"
        label="이메일"
        value={email}
        errorMsg={emailErrorMsg}
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
      />
      <div css={inputWrap}>
        <AuthTextInput
          dataTestId="password-input"
          label="비밀번호"
          type="password"
          value={password}
          errorMsg={passwordErrorMsg}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
        />
      </div>
      <div css={btnWrap}>
        <LoadingButton
          dataTestId="signup-button"
          isLoading={isLoading}
          onClick={handleSubmit}
          disabled={!(!emailErrorMsg && !passwordErrorMsg)}
        >
          <div css={submitBtn}>
            {formType === 'signin' ? '로그인' : '회원가입'}
          </div>
        </LoadingButton>
      </div>
    </div>
  );
};

const inputWrap = css`
  margin-top: 36px;
`;

const btnWrap = css`
  margin-top: 48px;
`;

const submitBtn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  width: 100%;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  color: ${COLORS.white};
  transition: 0.3s;

  &:hover {
    background-color: ${COLORS.primaryHover};
  }
`;
