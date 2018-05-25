import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class TeamDetail extends Component {
  render() {
    return (
      <div className="text-center" style={{fontSize: 25}} >
        <img src={this.props.teamLogo} alt={this.props.teamName} height="90"/>
        <span>
          {this.props.teamName}
        </span>
      </div>
    );
  }
}

TeamDetail.propTypes = {
  id: PropTypes.number.isRequired,
  teamName: PropTypes.string.isRequired,
  teamLogo: PropTypes.string.isRequired
};

export default TeamDetail;
