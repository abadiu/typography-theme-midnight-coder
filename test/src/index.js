import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import typography from './typography'

ReactDOM.render(
  <React.StrictMode>
    <App style={typography}/>
  </React.StrictMode>,
  document.getElementById('root')
);

