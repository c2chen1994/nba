import React from 'react';
import Team from './Team';
import {PropTypes} from 'prop-types';

const ContestList = ({teams, onContestClick}) => {
  return (
    <div>
      {teams.map(team =>
        <Team key={team.id}
        onClick={onContestClick}
        {...team} />
      )}
    </div>
  );
};

ContestList.propTypes = {
  teams: PropTypes.array,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
