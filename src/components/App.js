import React, {Component} from 'react';
import Header from './Header';
import Team from './Team';
import axios from 'axios';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: 42
  //   };
  // }

  state = {
    pageHeader : 'Naming Contests',
    teams: []
  };

  componentDidMount() {
    //ajax, timers, listeners
    axios.get('/api/teams')
      .then(resp => {
        this.setState({
          teams: resp.data.teams
        });
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    //clear timers, listeners

  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.teams.map(team =>
            <Team key={team.id} {...team} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
