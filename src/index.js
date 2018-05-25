import React from 'react';
import {render} from 'react-dom';
import {PropTypes} from 'prop-types';

//window.React = React;
const Header = ({message}) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

Header.defaultProps = {
  message: 'Hello!'
};

const App = () => {
  return (
    <div>
      <Header message="Naming Contests!" />
      <div>
        ...
      </div>
    </div>
  );
};



render(
  <App />,
  document.querySelector('#root')
);
