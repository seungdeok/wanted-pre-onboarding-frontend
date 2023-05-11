import { css } from '@emotion/react';

import { LoadingButton } from '@/components/common/LoadingButton';
import { AuthTextInput } from '@/components/auth/TextInput';
import { COLORS } from '@/styles/theme';
import { ChangeEvent, FocusEvent } from 'react';

interface Props {
  isLoading: boolean;
  formType: 'signin' | 'signup';
  onSubmit: () => void;
  email: string;
  emailErrorMsg: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlurEmail: (event: FocusEvent<HTMLInputElement, Element>) => void;
  password: string;
  passwordErrorMsg: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlurPassword: (event: FocusEvent<HTMLInputElement, Element>) => void;
}

export const AuthForm = ({
  isLoading,
  formType,
  onSubmit,
  email,
  emailErrorMsg,
  onChangeEmail,
  onBlurEmail,
  password,
  passwordErrorMsg,
  onChangePassword,
  onBlurPassword,
}: Props) => {
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
          onClick={onSubmit}
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
