import { postApi } from "configs/networkHandler";

export const signupApi = async ({ email, password }) => {
  const res = await postApi({
    url: '/auth/signup',
    body: {
      email,
      password,
    },
  });


  console.log(res);

  return {
    success: res.statusCode === 201,
    data: {
      ...res,
    },
  };
};

export const signinApi = async ({ email, password }) => {
  const res = await postApi({
    url: '/auth/signin',
    body: {
      email,
      password,
    },
  });

  return {
    success: res.statusCode === 200,
    data: {
      ...res,
    },
  };
}
