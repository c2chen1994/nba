// fetch data from the api
import React from 'react';
import axios from 'axios';
import config from './config';
import ReactDOMSever from 'react-dom/server';
import App from './src/components/App';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/teams`)
    .then(resp => {
      return ReactDOMSever.renderToString(
        <App initialTeams={resp.data.teams} />
      );
    });

export default serverRender;
