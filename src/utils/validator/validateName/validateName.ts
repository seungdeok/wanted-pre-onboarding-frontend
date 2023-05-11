interface ReturnType {
  success: boolean;
  msg?: string;
}

export const validateName = (value: string): ReturnType => {
  if (value.length) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    msg: '올바른 이름 형식이 아닙니다',
  };
};
