const TodoItem = ({
  isEditingMode = false,
  checked,
  onChangeIsCompleted,
  editingTodo,
  onChangeText,
  onClickUpdate,
  onClickEditClear,
  todo,
  onClickEditMode,
  onClickDelete,
}) => {
  if (isEditingMode) {
    return (
      <li>
        <label>
          <input type="checkbox" checked={checked} onChange={onChangeIsCompleted} />
          <input data-testid="modify-input" name="modify-input" value={editingTodo} onChange={onChangeText} />
        </label>
        <button data-testid="submit-button" onClick={onClickUpdate}>제출</button>
        <button data-testid="cancel-button" onClick={onClickEditClear}>취소</button>
      </li>
    )
  }
  return (
    <li>
      <label>
        <input type="checkbox" checked={checked} onChange={onChangeIsCompleted} />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button" onClick={onClickEditMode}>수정</button>
      <button data-testid="delete-button" onClick={onClickDelete}>삭제</button>
    </li>
  );
};

export default TodoItem;
