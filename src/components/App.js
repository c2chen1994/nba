import React, {Component} from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: 42
  //   };
  // }

  state = {
    pageHeader : 'Naming Contests',
    teams: this.props.initialTeams
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
        <ContestList teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
