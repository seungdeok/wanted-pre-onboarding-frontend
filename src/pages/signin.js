import Page from "components/core/page";
import { signinApi } from "configs/api/auth";
import useAuth from "hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);

  const handleChangeText = ({ target: { name, value } }) => {
    if (name === "password") {
      setPassword(value);

      // 유효성 검사: 8자 이상
      setIsPasswordValidated(value.length >= 8);
    } else if (name === "email") {
      setEmail(value);

      // 유효성 검사: @ 포함
      setIsEmailValidated(value.includes("@"));
    }
  }

  const handleSubmit = async () => {
    const {
      data,
      success,
    } = await signinApi({
      email,
      password,
    });

    if (!success) {
      // 로그인 실패
      return alert(`로그인 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
    }

    /** 정상 로그인시
     * 1. 응답받은 JWT 토큰 로컬 스토리지에 저장
     * 2. /todo 경로로 이동
     */
    alert('정상 로그인되었습니다');
    window.localStorage.setItem('x-access-token', data['access_token']);
    navigate('/todo');
  };

  useAuth();

  return (
    <Page label="로그인">
      <input
        data-testid="email-input"
        value={email}
        onChange={handleChangeText}
        type="email"
        name="email" />
      <input
        data-testid="password-input"
        value={password}
        onChange={handleChangeText}
        type="password"
        name="password" />
      <button
        data-testid="signin-button"
        disabled={!(isEmailValidated === true && isPasswordValidated === true)}
        onClick={handleSubmit}>
        로그인
      </button>
    </Page>
  );
};

export default SignInPage;
