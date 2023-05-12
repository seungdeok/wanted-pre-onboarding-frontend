import { setupServer } from 'msw/node';
import { handlers } from '@/msw/mocks';

// 서버 인스턴스 생성
const server = setupServer(...handlers);

// 서버 시작
beforeAll(() => {
  server.listen();
});

// 서버 종료
afterAll(() => {
  server.close();
});

// 서버 초기화
afterEach(() => {
  server.resetHandlers();
});

export { server };
