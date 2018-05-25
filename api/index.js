import express from 'express';
import teamData from '../src/teamData';

const router = express.Router();

router.get('/teams', (req, res) => {
  res.send({teams: teamData.teams});
});

export default router;
