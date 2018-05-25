import React from 'react';
import {render} from 'react-dom';
import {PropTypes} from 'prop-types';

//window.React = React;

const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'Hello!'
};

render(
  <App headerMessage="Hellp props!" />,
  document.querySelector('#root')
);
