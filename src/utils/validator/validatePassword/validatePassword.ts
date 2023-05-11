interface ReturnType {
  success: boolean;
  msg?: string;
}

export const PASSWORD_ERROR_MSG = {
  empty: '비밀번호를 입력해주세요',
  invalid: '올바른 비밀번호 형식이 아닙니다',
} as const;

export const validatePassword = (value: string): ReturnType => {
  if (!value) {
    return {
      success: false,
      msg: PASSWORD_ERROR_MSG.empty,
    };
  }
  if (value.length >= 8) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    msg: PASSWORD_ERROR_MSG.invalid,
  };
};
