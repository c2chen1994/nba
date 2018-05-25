import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Team extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
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
  id: PropTypes.number.isRequired,
  teamName: PropTypes.string.isRequired,
  teamLogo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Team.defaultProps = {
  team: []
};

export default Team;
