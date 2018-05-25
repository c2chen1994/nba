import React from 'react';
import Team from './Team';
import {PropTypes} from 'prop-types';

const ContestList = ({teams, onContestClick}) => {
  return (
    <div>
      {Object.keys(teams).map(teamId =>
        <Team key={teamId}
        onClick={onContestClick}
        {...teams[teamId]} />
      )}
    </div>
  );
};

ContestList.propTypes = {
  teams: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
