import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import smartOutline from 'smart-outline';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

smartOutline.init();

injectGlobal`
  body { 
    height: 100vh;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    font-size: 16px;
  }
  #root { height: 100%; }
  body, body * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
