import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DesktopLP from './features/desktop-lp';

ReactDOM.render(
  <React.StrictMode>
    <DesktopLP />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
