// fetch data from the api

import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/teams`)
  .then(resp => {
    // this.setState({
    //   teams: resp.data.teams
    // });
    console.log(resp.data);
  });
