import React, {Component} from 'react';
import Header from './Header';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: 42
  //   };
  // }

  state = {
    pageHeader : 'Naming Contests'
  };

  componentDidMount() {
    //ajax, timers, listeners

  }

  componentWillUnmount() {
    //clear timers, listeners

  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;
