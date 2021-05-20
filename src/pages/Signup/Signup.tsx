import { useState } from 'react';

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
          {password && <span data-testid="password-error">적절한 비밀번호 형식이 아닙니다.</span>}
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
        </section>
      </form>
    </div>
  );
}

export default Signup;
