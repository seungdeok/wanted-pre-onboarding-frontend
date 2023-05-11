import { useCallback, useState } from 'react';

type ReturnType = [
  value: boolean,
  setTrue: () => void,
  setFalse: () => void,
  toggle: () => void,
];

export const useBoolean = (initialValue: boolean): ReturnType => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(prev => !prev), []);

  return [value, setTrue, setFalse, toggle];
};
