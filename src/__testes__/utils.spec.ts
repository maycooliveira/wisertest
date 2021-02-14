import { checkEmail } from '../utils';

describe('Valid Email', () => {
  it('It should check if the text entered is an valid e-mail', () => {
    expect(checkEmail('test.test@test.com')).toBe(true);
  });
});
