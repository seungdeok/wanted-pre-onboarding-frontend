import { deleteApi, getApi, postApi, putApi } from "configs/networkHandler";

export const createTodoApi = async ({ todo }) => {
  const token = window.localStorage.getItem('x-access-token') ?? '';
  const res = await postApi({
    url: '/todos',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: {
      todo,
    },
  });

  return {
    success: res.statusCode === 201,
    data: {
      ...res,
    },
  };
};

export const getTodosApi = async () => {
  const token = window.localStorage.getItem('x-access-token') ?? '';
  const res = await getApi({
    url: '/todos',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  });

  return {
    success: res.statusCode === 200,
    data: {
      ...res,
    },
  };
};

export const updateTodoApi = async ({
  id,
  todo,
  isCompleted,
}) => {
  const token = window.localStorage.getItem('x-access-token') ?? '';
  const res = await putApi({
    url: `/todos/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: {
      todo,
      isCompleted,
    },
  });

  return {
    success: res.statusCode === 200,
    data: {
      ...res,
    },
  };
};

export const deleteTodoApi = async ({
  id,
}) => {
  const token = window.localStorage.getItem('x-access-token') ?? '';
  const res = await deleteApi({
    url: `/todos/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
  });

  return {
    success: res.statusCode === 204,
    data: {
      ...res,
    },
  };
};