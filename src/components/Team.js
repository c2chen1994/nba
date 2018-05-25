import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Team extends Component {
  handleClick = () => {
    console.log(this.props.teamName);
  };
  render() {
    return (
      <div className="text-center" style={{fontSize: 25}} onClick={this.handleClick} >
        <img src={this.props.teamLogo} alt={this.props.teamName} height="90"/>
        <span>
          {this.props.teamName}
        </span>
      </div>
    );
  }
}


Team.propTypes = {
  teamName: PropTypes.string,
  teamLogo: PropTypes.string
};

Team.defaultProps = {
  team: []
};

export default Team;
