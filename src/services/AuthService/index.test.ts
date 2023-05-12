import { server } from '@/msw/server';
import { AuthService } from './AuthService';

describe('[unit] AuthService', () => {
  // 테스트 전 msw 서버 시작
  beforeAll(() => {
    server.listen();
  });

  // 테스트 후 msw 서버 종료
  afterAll(() => {
    server.close();
  });

  it('Return signup successful response', async () => {
    const response = await AuthService.signup({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(response.statusCode).toBe(200);
  });

  it('Return signin successful response', async () => {
    const response = await AuthService.signin({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(response.statusCode).toBe(200);
  });
});
