import { useState } from 'react';

function AboutPage() {
  const [slug, setSlug] = useState('');

  return (
    <div>
      <h1>About Page</h1>
      <input
        type="text"
        placeholder="slug"
        value={slug}
        onChange={({ target }) => setSlug(target.value)}
      />
      <button
        type="button"
        onClick={() => {
          location.href = `/cards/${slug}`;
        }}
      >
        이동
      </button>
    </div>
  );
}

export default AboutPage;
