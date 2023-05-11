import { useCallback, useState } from 'react';

type ReturnType = [
  string,
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  (event: React.FocusEvent<HTMLInputElement, Element>) => void,
  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
];

export const useInput = (
  initialValue: string,
  validator: (value: string) => { success: boolean; msg?: string },
): ReturnType => {
  const [text, setText] = useState<string>(initialValue);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  }, []);

  const onBlur = useCallback(() => {
    if (validator != undefined) {
      const { success, msg } = validator(text);
      const defaultMsg = msg ?? '오류가 발생하였습니다';
      setErrorMsg(success ? '' : defaultMsg);
    }
  }, [text, validator]);

  const reset = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setText(initialValue);
    },
    [initialValue],
  );

  return [text, errorMsg, onChange, onBlur, reset];
};
