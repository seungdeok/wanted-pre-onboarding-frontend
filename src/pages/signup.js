import Page from "components/core/page";
import { signupApi } from "configs/api/auth";
import useAuth from "hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
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
    } = await signupApi({
      email,
      password,
    });

    if (!success) {
      // 회원가입 실패
      return alert(`회원가입 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
    }

    /** 정상 가입시
     * 1. /signin 경로로 이동
     */
    alert('정상 가입되었습니다');
    navigate('/signin');
  };

  useAuth();

  return (
    <Page label="회원가입">
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
        data-testid="signup-button"
        disabled={!(isEmailValidated === true && isPasswordValidated === true)}
        onClick={handleSubmit}>
        회원가입
      </button>
    </Page>
  );
};

export default SignUpPage;
