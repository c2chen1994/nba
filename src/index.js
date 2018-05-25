import React from 'react';
import {render} from 'react-dom';

//window.React = React;
const num = Math.random();
const color = num > 0.5 ? 'green' : 'red';
render(
  <h2 className="text-center" style={{color}}>
    React with JSX!!! -- {num}
  </h2>,
  document.querySelector('#root')
);
