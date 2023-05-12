import { EMAIL_ERROR_MSG, validateEmail } from './validateEmail';

describe('[unit] validateName', () => {
  it('Return success true when email is valid', () => {
    const email = 'valid@email.com';
    const result = validateEmail(email);
    expect(result.success).toBe(true);
    expect(result.msg).toBeUndefined();
  });

  it('Return success false and error message when name is invalid', () => {
    const email = 'validemail.com';
    const result = validateEmail(email);
    expect(result.success).toBe(false);
    expect(result.msg).toBe(EMAIL_ERROR_MSG.invalid);
  });

  it('Return success true when name is empty', () => {
    const email = '';
    const result = validateEmail(email);
    expect(result.success).toBe(false);
    expect(result.msg).toBe(EMAIL_ERROR_MSG.empty);
  });
});
