import express from 'express';
import teamData from '../src/teamData';

const router = express.Router();

const teams = teamData.teams.reduce((obj, team) => {
  obj[team.id] = team;
  return obj;
}, {});

router.get('/teams', (req, res) => {
  res.send({
    teams: teams
  });
});

export default router;
