export function validatePassword(password: string) {
  if (password.length < 12) {
    return false;
  }
  if (!/[\d]+/.test(password)) {
    return false;
  }
  if (!/[a-zA-Z]+/.test(password)) {
    return false;
  }
  return true;
}
