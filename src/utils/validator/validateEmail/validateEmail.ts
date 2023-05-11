interface ReturnType {
  success: boolean;
  msg?: string;
}

export const validateEmail = (value: string): ReturnType => {
  if (!value || value.includes('@')) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    msg: '올바른 이메일 형식이 아닙니다',
  };
};
