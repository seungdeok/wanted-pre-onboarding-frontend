interface ReturnType {
  success: boolean;
  msg?: string;
}

export const ERROR_MSG = {
  empty: '이메일을 입력해주세요',
  invalid: '올바른 이메일 형식이 아닙니다',
} as const;

export const validateEmail = (value: string): ReturnType => {
  if (!value) {
    return {
      success: false,
      msg: ERROR_MSG.empty,
    };
  } else if (value.includes('@')) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    msg: ERROR_MSG.invalid,
  };
};
