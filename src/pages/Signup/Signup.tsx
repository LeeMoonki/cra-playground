import { useState } from 'react';
import { validatePassword } from '../../lib/validation/password';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <section>
          <label htmlFor="id">아이디</label>
          <div>
            <input
              data-testid="inputId"
              id="id"
              type="text"
              value={id}
              onChange={({ target }) => setId(target.value)}
            />
            <button data-testid="buttonDupcheck" type="button" disabled={!id}>
              중복확인
            </button>
          </div>
        </section>
        <section>
          <label htmlFor="password">비밀번호</label>
          <input
            data-testid="inputPassword"
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {password && !validatePassword(password) && (
            <span data-testid="password-error">적절한 비밀번호 형식이 아닙니다.</span>
          )}
        </section>
        <section>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            data-testid="inputPasswordConfirm"
            id="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={({ target }) => setPasswordConfirm(target.value)}
          />
          {passwordConfirm && password !== passwordConfirm && (
            <span data-testid="password-confirm-error">입력한 비밀번호와 다릅니다.</span>
          )}
        </section>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
