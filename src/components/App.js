import React, {Component} from 'react';
import Header from './Header';
import ContestList from './ContestList';
import TeamDetail from './TeamDetail';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: 42
  //   };
  // }

  state = {
    pageHeader : 'All NBA Teams',
    teams: this.props.initialTeams
  };

  componentDidMount() {
    //ajax, timers, listeners

  }

  componentWillUnmount() {
    //clear timers, listeners

  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
       `/teams/${contestId}`
    );

    this.setState({
      pageHeader: this.state.teams[contestId].teamName,
      currentContestId: contestId
    });
  };
  currentContent() {
    if (this.state.currentContestId){
      return <TeamDetail {...this.state.teams[this.state.currentContestId]} />;
    }
    return <ContestList
      onContestClick={this.fetchContest}
      teams={this.state.teams} />;
  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        {this.currentContent()}

      </div>
    );
  }
}

export default App;
