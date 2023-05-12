import { COLORS } from '@/styles/theme';
import { css } from '@emotion/react';

interface Props {
  id: number;
  todo: string;
}

export const TodoItem = ({ id, todo }: Props) => {
  return (
    <li css={itemWrap}>
      <label>
        <input type="checkbox" />
        <span>
          {id}_{todo}
        </span>
      </label>
      <div css={btnWrap}>
        <button css={editBtnWrap} data-testid="modify-button">
          수정
        </button>
        <button css={removeBtnWrap} data-testid="delete-button">
          삭제
        </button>
      </div>
    </li>
  );
};

const itemWrap = css`
  height: 44px;
  padding: 12px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const btnWrap = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const editBtnWrap = css`
  width: 44px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const removeBtnWrap = css`
  width: 44px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${COLORS.statusFailure};
`;
