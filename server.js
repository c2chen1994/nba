import express from 'express';
import config from './config';
//import fs from 'fs';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  //res.send('Hello Express\n');
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));
// server.get('/about', (req, res) => {
//   //res.send('The about page\n');
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
})
