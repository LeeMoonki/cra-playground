import { validatePassword } from '../../../lib/validation/password';

test('validatePassword', () => {
  const onlyAlphabet = { data: 'abcdefghijkl', expect: false };
  const onlyNumber = { data: '123456789012', expect: false };
  const notEnoughLength = { data: '123ab', expect: false };

  const proper = { data: '12345678901a', expect: true };

  expect(validatePassword(onlyAlphabet.data)).toBe(onlyAlphabet.expect);
  expect(validatePassword(onlyNumber.data)).toBe(onlyNumber.expect);
  expect(validatePassword(notEnoughLength.data)).toBe(notEnoughLength.expect);

  expect(validatePassword(proper.data)).toBe(proper.expect);
});
