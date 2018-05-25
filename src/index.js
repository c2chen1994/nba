import React from 'react';
import {render} from 'react-dom';
import {PropTypes} from 'prop-types';
import App from './components/app';

//window.React = React;






render(
  <App />,
  document.querySelector('#root')
);
