import React from 'react';
import {PropTypes} from 'prop-types';

const Team = (team) => {
  return (
    <div className="text-center" style={{fontSize: 25}} >
      <img src={team.teamLogo} alt={team.teamName} height="90"/>
      <span>
        {team.teamName}
      </span>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.array
};

Team.defaultProps = {
  team: []
};

export default Team;
