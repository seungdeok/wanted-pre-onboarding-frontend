import { validatePassword } from './validatePassword';

describe('[unit] validatePassword', () => {
  it('Return success true when password is valid', () => {
    const password = 'validpassword';
    const result = validatePassword(password);
    expect(result.success).toBe(true);
    expect(result.msg).toBeUndefined();
  });

  it('Return success false and error message when password is invalid', () => {
    const password = 'short';
    const result = validatePassword(password);
    expect(result.success).toBe(false);
    expect(result.msg).toBe('올바른 비밀번호 형식이 아닙니다');
  });

  it('Return success true when password is empty', () => {
    const password = '';
    const result = validatePassword(password);
    expect(result.success).toBe(true);
    expect(result.msg).toBeUndefined();
  });
});
