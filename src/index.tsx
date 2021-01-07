import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;
console.log('SNOWPACK_PUBLIC_API_URL..', SNOWPACK_PUBLIC_API_URL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
