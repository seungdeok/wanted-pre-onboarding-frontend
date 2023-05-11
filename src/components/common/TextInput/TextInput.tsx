import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  type?: string;
}

export const TextInput = ({ type = 'text', ...restProps }: Props) => {
  return <input {...restProps} type={type} />;
};
