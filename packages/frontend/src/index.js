import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

ReactDOM.render(
  hot(module)(<h1>Project template</h1>),
  document.querySelector('#app')
);
