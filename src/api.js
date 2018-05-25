import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/teams/${contestId}`)
    .then(resp => resp.data);
};
