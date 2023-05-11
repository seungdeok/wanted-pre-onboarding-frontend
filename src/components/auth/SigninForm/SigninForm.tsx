import { LoadingButton } from '@/components/common/LoadingButton';
import { AuthTextInput } from '../TextInput';
import { css } from '@emotion/react';
import { COLORS } from '@/styles/theme';
import { useInput } from '@/hooks/useInput';
import { validateEmail, validatePassword } from '@/utils/validator';

const INITIAL_TEXT = '';

export const SigninForm = () => {
  const [email, emailErrorMsg, onChangeEmail, onBlurEmail] = useInput(
    INITIAL_TEXT,
    validateEmail,
  );
  const [password, passwordErrorMsg, onChangePassword, onBlurPassword] =
    useInput(INITIAL_TEXT, validatePassword);

  const handleSubmit = () => {
    console.log('login');
  };

  return (
    <div>
      <AuthTextInput
        label="이메일"
        value={email}
        errorMsg={emailErrorMsg}
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
      />
      <div css={inputWrap}>
        <AuthTextInput
          label="비밀번호"
          type="password"
          value={password}
          errorMsg={passwordErrorMsg}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
        />
      </div>
      <div css={btnWrap}>
        <LoadingButton isLoading={false} onClick={handleSubmit}>
          <div css={submitBtn}>로그인</div>
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
