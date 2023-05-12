import { API_URL } from '@/constants/api';
import { IAuth } from '@/services/AuthService';
import { rest } from 'msw';

export const handlers = [
  rest.post(API_URL.auth + '/signin', (req, res, ctx) => {
    const responseData: IAuth = {
      data: {
        access_token: 'mocked-access-token',
      },
      statusCode: 200,
    };

    return res(ctx.json(responseData), ctx.delay(150));
  }),
  rest.post(API_URL.auth + '/signup', (req, res, ctx) => {
    const responseData: IAuth = {
      data: {},
      statusCode: 200,
    };

    return res(ctx.json(responseData), ctx.delay(150));
  }),
];
