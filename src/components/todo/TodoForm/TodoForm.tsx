import { css } from '@emotion/react';

import { useInput } from '@/hooks/useInput';
import { validateTodoText } from '@/utils/validator';
import { TodoHeader } from '@/components/todo/TodoHeader';
import { TodoList } from '@/components/todo/TodoList';
import { COLORS } from '@/styles/theme';
import { useState } from 'react';

const INITIAL_TEXT = '';

export const TodoForm = () => {
  const [text, textErrorMsg, onChangeText, onBlurText] = useInput(
    INITIAL_TEXT,
    validateTodoText,
  );

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    if (text) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  return (
    <div css={formWrap}>
      <TodoHeader
        isLoading={isLoading}
        onSubmit={handleSubmit}
        errorMsg={textErrorMsg}
        value={text}
        onChange={onChangeText}
        onBlur={onBlurText}
      />
      <TodoList data={[{ name: '123', id: 1 }]} />
    </div>
  );
};

const formWrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.grey2};
`;
