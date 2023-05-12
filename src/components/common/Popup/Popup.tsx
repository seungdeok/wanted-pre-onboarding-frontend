import { usePopup } from '@/hooks/usePopup';
import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';

export const Popup = () => {
  const { isOpen, isConfirm, popupMessage, close, approve } = usePopup();

  if (!isOpen) return null;
  return (
    <div css={popupWrap}>
      <div css={overlay} />
      <div css={cardWrap}>
        <div css={contentWrap}>{popupMessage}</div>
        {isConfirm && approve ? (
          <div css={btnWrap}>
            <button onClick={approve}>확인</button>
            <button onClick={close}>취소</button>
          </div>
        ) : (
          <button onClick={close}>확인</button>
        )}
      </div>
    </div>
  );
};

const popupWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`;
const overlay = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const cardWrap = css`
  width: 448px;
  z-index: 2;
  background: ${COLORS.white};
  box-shadow: 0px 24px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const contentWrap = css`
  padding: 58px 64px 64px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const btnWrap = css`
  padding: 0 64px;

  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    height: 52px;
    flex: 1;
  }
`;
