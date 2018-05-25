/*
// as a client
import https from 'https';
https.get('https://www.lynda.com', res => {
  console.log('Response status code: ', res.statusCode);

  res.on('data', chunk => {
    console.log(chunk.toString());
  });
});
*/

// as a server
import http from 'http';
const server = http.createServer((req, res) => {
  res.write('Hello HTTP\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

server.listen(8080);

//server.on('request', );
