interface ReturnType {
  success: boolean;
  msg?: string;
}

export const validatePassword = (value: string): ReturnType => {
  if (!value || value.length >= 8) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    msg: '올바른 비밀번호 형식이 아닙니다',
  };
};
