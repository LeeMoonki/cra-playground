import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import InlineFunction from './InlineFunction';

function ReRenderingPage() {
  return (
    <div>
      <section>
        <h1>Component1</h1>
        <Component1 />
      </section>
      <section>
        <h1>Component2</h1>
        <Component2 />
      </section>
      <section>
        <h1>Inline Function</h1>
        <InlineFunction />
      </section>
    </div>
  );
}

export default ReRenderingPage;
