import { validateName } from './validateName';

describe('[unit] validateName', () => {
  it('Return success true when name is valid', () => {
    const name = 'validname';
    const result = validateName(name);
    expect(result.success).toBe(true);
    expect(result.msg).toBeUndefined();
  });

  it('Return success false and error message when name is empty', () => {
    const name = '';
    const result = validateName(name);
    expect(result.success).toBe(false);
    expect(result.msg).toBe('올바른 이름 형식이 아닙니다');
  });
});
