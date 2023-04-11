import Page from "components/core/page";
import TodoItem from "components/todo/todoItem";
import { createTodoApi, deleteTodoApi, getTodosApi, updateTodoApi } from "configs/api/todo";
import useAuth from "hooks/useAuth";
import { useEffect, useState } from "react";

const TodoPage = () => {
  const [todo, setTodo] = useState('');
  const [targetEditingId, setTargetEditingId] = useState('');
  const [editingTodo, setEditingTodo] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = async () => {
    if (!todo) {
      return alert('내용을 입력해주세요');
    }

    // network request
    const {
      data,
      success,
    } = await createTodoApi({ todo });

    if (!success) {
      // TODO 생성 실패
      return alert(`TODO 생성 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
    }

    setList([...list, {
      id: list.length,
      todo,
      isCompleted: false,
      userId: '',
    }]);
    setTodo('');
  };

  const handleChangeIsCompleted = (id) => async ({ target: { checked } }) => {
    const index = list.findIndex(item => item.id === id);
    const newList = list.slice();
    newList[index] = {
      ...list[index],
      isCompleted: checked,
    };

    // network request
    const {
      success,
      data,
    } = await updateTodoApi({ id, todo: newList[index]['todo'], isCompleted: checked });

    if (!success) {
      // TODO 수정 실패
      return alert(`TODO 수정 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
    }

    setList([...newList]);
  };

  const handleClickEditClear = () => {
    setEditingTodo('');
    setTargetEditingId('');
  };

  const handleClickEditMode = (id) => () => {
    const target = list.find(item => item.id === id);
    setEditingTodo(target.todo);
    setTargetEditingId(id);
  }

  const handleClickDelete = (id) => async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const newList = list.filter(item => item.id !== id);

      // network request
      const {
        success,
        data,
      } = await deleteTodoApi({ id });

      if (!success) {
        // TODO 삭제 실패
        return alert(`TODO 삭제 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
      }

      setList([...newList]);
    }
  }

  const handleChangeText = ({ target: { name, value } }) => {
    if (name === "new-input") {
      setTodo(value);
    } else if (name === "modify-input") {
      setEditingTodo(value);
    }
  }

  const handleClickUpdate = (id) => async () => {
    if (window.confirm('정말 제출하시겠습니까?')) {
      if (!editingTodo) {
        return alert('내용을 입력해주세요');
      }

      const index = list.findIndex(item => item.id === id);
      const newList = list.slice();
      newList[index] = {
        ...list[index],
        todo: editingTodo,
      };

      // network request
      const {
        success,
        data,
      } = await updateTodoApi({ id, todo: editingTodo, isCompleted: newList[index]['isCompleted'] });

      if (!success) {
        // TODO 수정 실패
        return alert(`TODO 수정 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
      }

      setList([...newList]);

      handleClickEditClear();
    }
  };

  const initRequest = async () => {
    // network request
    const {
      data,
      success,
    } = await getTodosApi();

    if (!success) {
      // 목록 조회 실패
      return alert(`목록 조회 실패\n${data.message ?? '잠시 후 시도해주세요'}`);
    }
    setList(data.data ?? []);
  };

  useAuth();

  useEffect(() => {
    initRequest();
  }, []);

  return (
    <Page label="TODO">
      <input data-testid="new-todo-input" name="new-input" value={todo} onChange={handleChangeText} />
      <button data-testid="new-todo-add-button" onClick={handleSubmit}>추가</button>
      {list.map((value) => (
        <TodoItem
          key={String(value.id)}
          isEditingMode={value.id === targetEditingId}
          checked={value.isCompleted}
          todo={value.todo}
          editingTodo={editingTodo}
          onChangeIsCompleted={handleChangeIsCompleted(value.id)}
          onChangeText={handleChangeText}
          onClickUpdate={handleClickUpdate(value.id)}
          onClickEditClear={handleClickEditClear}
          onClickDelete={handleClickDelete(value.id)}
          onClickEditMode={handleClickEditMode(value.id)}
        />
      ))}
    </Page>
  );
};

export default TodoPage;
