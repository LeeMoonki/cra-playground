import { useState } from 'react';

function Signup() {
  const [id, setId] = useState('');

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <section>
          <label htmlFor="id">아이디</label>
          <div>
            <input id="id" type="text" value={id} onChange={({ target }) => setId(target.value)} />
            <button type="button">중복확인</button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Signup;
