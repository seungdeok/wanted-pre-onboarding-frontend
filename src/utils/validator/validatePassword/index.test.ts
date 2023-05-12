import { validatePassword, PASSWORD_ERROR_MSG } from './validatePassword';

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
    expect(result.msg).toBe(PASSWORD_ERROR_MSG.invalid);
  });

  it('Return success true when password is empty', () => {
    const password = '';
    const result = validatePassword(password);
    expect(result.success).toBe(false);
    expect(result.msg).toBe(PASSWORD_ERROR_MSG.empty);
  });
});
