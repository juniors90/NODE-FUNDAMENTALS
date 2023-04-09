import * as http from 'node:http';

// Create an HTTP server
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!...');
}); 

// Now that server is running
const host = '127.0.0.1';
const port = 8000;
server.listen(port, host, () => {
    console.log(`Server listen on http://${host}:${port}/`)
    // make a request
    const options = {
      port: 1337,
      host: '127.0.0.1',
      headers: {
        'Connection': 'Upgrade',
        'Upgrade': 'websocket',
      },
    };
});