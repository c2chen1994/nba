import React from 'react';
import Team from './Team';
import {PropTypes} from 'prop-types';

const ContestList = ({teams}) => {
  return (
    <div>
      {teams.map(team =>
        <Team key={team.id} {...team} />
      )}
    </div>
  );
};

ContestList.propTypes = {
  teams: PropTypes.array
};

export default ContestList;
