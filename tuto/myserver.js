import * as http from 'node:http';
import myDateTime from './myfirstmodule.js';

const host = '127.0.0.1';
const port = 8000;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + myDateTime());

    res.end();
}).listen(port, host, ()=>{
    console.log(`Server listen on http://${host}:${port}/`);
});