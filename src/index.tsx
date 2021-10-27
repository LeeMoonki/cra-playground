/* eslint-disable no-prototype-builtins */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/index.css';
import './css/reset.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

if (
  !new (class {
    x: any;
  })().hasOwnProperty('x')
) {
  throw new Error('Transpiler is not configured correctly');
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
