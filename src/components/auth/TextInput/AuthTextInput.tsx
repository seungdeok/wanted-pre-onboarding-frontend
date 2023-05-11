import { TextInput } from '@/components/common/TextInput';
import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  type?: string;
  label: string;
  errorMsg: string;
}

export const AuthTextInput = ({
  type = 'text',
  label = '',
  errorMsg = '',
  ...restProps
}: Props) => {
  return (
    <div css={inputWrap}>
      <label>{label}</label>
      <TextInput type={type} {...restProps} />
      {errorMsg.length ? <div css={errorWrap}>{errorMsg}</div> : null}
    </div>
  );
};

const inputWrap = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const errorWrap = css`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  color: ${COLORS.statusFailure};
`;
