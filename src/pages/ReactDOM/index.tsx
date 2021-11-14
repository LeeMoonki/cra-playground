import { css } from '@emotion/react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ReactDOMPage = () => {
  useEffect(() => {
    ReactDOM.render(
      <div id="foo1" css={styleDiv}>
        foo1
      </div>,
      document.querySelector('#dom-root')
    );
    ReactDOM.render(
      <div id="foo2" css={styleDiv}>
        foo2
      </div>,
      document.querySelector('#dom-root')
    );
  }, []);

  return <div id="dom-root"></div>;
};

const styleDiv = css({
  width: '100px',
  height: '100px',
  border: '1px solid #000',
});

export default ReactDOMPage;
