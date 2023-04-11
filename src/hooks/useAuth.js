import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const verifyToken = () => {
    // token 검증 api가 없어서 존재 여부만 체크
    const token = window.localStorage.getItem('x-access-token');

    if (!token && location.pathname !== "signup") {
      // /signup의 경우 token이 없을 때 신규 가입을 위해 redirect 하지 않음.
      return navigate("/signin", { replace: true });
    }
    navigate("/todo", { replace: true });
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return;
};

export default useAuth;