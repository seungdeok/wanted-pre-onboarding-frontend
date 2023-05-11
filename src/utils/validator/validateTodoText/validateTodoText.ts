interface ReturnType {
  success: boolean;
  msg?: string;
}

export const TEXT_ERROR_MSG = {
  empty: '할 일을 입력해주세요',
} as const;

export const validateTodoText = (value: string): ReturnType => {
  if (!value) {
    return {
      success: false,
      msg: TEXT_ERROR_MSG.empty,
    };
  }
  return {
    success: true,
  };
};
