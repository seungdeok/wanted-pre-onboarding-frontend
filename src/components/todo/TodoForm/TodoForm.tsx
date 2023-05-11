import { css } from '@emotion/react';

import { useInput } from '@/hooks/useInput';
import { validateTodoText } from '@/utils/validator';
import { TodoHeader } from '@/components/todo/TodoHeader';
import { TodoList } from '@/components/todo/TodoList';
import { ITodo, TodoService } from '@/services/todoService';
import { COLORS } from '@/styles/theme';
import { QueryObserverResult } from '@tanstack/query-core';
import { useState } from 'react';

const INITIAL_TEXT = '';

interface Props {
  data: {
    data: ITodo[] | undefined;
  };
  isLoading: boolean;
  refetch: () => Promise<QueryObserverResult<ITodo[], Error>>;
}

export const TodoForm = ({ data, isLoading, refetch }: Props) => {
  const [text, textErrorMsg, onChangeText, onBlurText] = useInput(
    INITIAL_TEXT,
    validateTodoText,
  );

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text) return;
    setIsSubmitLoading(true);

    await TodoService.createTodo({ todo: text });
    setIsSubmitLoading(false);
    refetch();
  };

  return (
    <div css={formWrap}>
      <TodoHeader
        isLoading={isSubmitLoading}
        onSubmit={handleSubmit}
        errorMsg={textErrorMsg}
        value={text}
        onChange={onChangeText}
        onBlur={onBlurText}
      />
      <TodoList isLoading={isLoading} data={data} />
    </div>
  );
};

const formWrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.grey2};
`;
