import React from 'react';
import {render} from 'react-dom';
import {PropTypes} from 'prop-types';
import App from './components/App';
import teamData from './teamData';

//window.React = React;

render(
  <App teams={teamData.teams} />,
  document.querySelector('#root')
);
