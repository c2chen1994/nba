import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

//window.React = React;

render(
  <App initialTeams={window.initialData.teams} />,
  document.querySelector('#root')
);
