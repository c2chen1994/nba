import React from 'react';
import {render} from 'react-dom';
import {PropTypes} from 'prop-types';
import App from './components/App';

//window.React = React;

render(
  <App initialTeams={[]} />,
  document.querySelector('#root')
);
