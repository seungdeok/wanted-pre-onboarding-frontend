import { LoadingButton } from '@/components/common/LoadingButton';
import { TextInput } from '@/components/common/TextInput';
import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  errorMsg: string;
  isLoading: boolean;
  onSubmit: () => void;
}

export const TodoHeader = ({
  errorMsg,
  isLoading,
  onSubmit,
  ...restProps
}: Props) => {
  return (
    <div css={headerWrap}>
      <TextInput dataTestId="new-todo-add-button" type="text" {...restProps} />
      <LoadingButton
        dataTestId="new-todo-add-button"
        isLoading={isLoading}
        onClick={onSubmit}
        disabled={errorMsg !== ''}
      >
        <div css={submitBtn}>ADD</div>
      </LoadingButton>
      {!errorMsg ? null : <div css={errorWrap}>{errorMsg}</div>}
    </div>
  );
};

const headerWrap = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  background-color: ${COLORS.grey3};
  height: 50px;

  input {
    width: 100%;
    border: none;
    height: 100%;
  }

  button {
    position: absolute;
    right: 0;
    width: 50px;
    height: 100%;
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const errorWrap = css`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  color: ${COLORS.statusFailure};
`;

const submitBtn = css``;
