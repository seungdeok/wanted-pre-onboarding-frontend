import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  type?: string;
  dataTestId: string;
}

export const TextInput = ({
  type = 'text',
  dataTestId,
  ...restProps
}: Props) => {
  return <input {...restProps} data-testid={dataTestId} type={type} />;
};
