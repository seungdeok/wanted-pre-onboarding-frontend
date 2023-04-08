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

  const handleSubmit = () => {
    // 정상 완료시 /todo 경로로 이동
    navigate('/todo');
  };

  return (
    <div>
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
    </div>
  );
};

export default SignInPage;
