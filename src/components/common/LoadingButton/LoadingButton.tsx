import { COLORS } from '@/styles/theme';
import { css, keyframes } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const MIN_TOUCH_SIZE = 44;

export const LoadingButton = ({
  isLoading,
  disabled,
  children,
  onClick,
}: Props) => {
  return (
    <button
      css={css`
        ${touchWrap};
        opacity: ${disabled || isLoading ? 0.75 : 1};
      `}
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <div css={loadingBtn} /> : null}
      {children}
    </button>
  );
};

const touchWrap = css`
  width: 100%;
  height: 100%;
  min-height: ${MIN_TOUCH_SIZE}px;
  min-width: ${MIN_TOUCH_SIZE}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const loadingBtn = css`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  width: 24px;
  height: 24px;
  border: 4px solid ${COLORS.primary};
  border-top-color: ${COLORS.white};
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
  box-sizing: border-box;
`;
