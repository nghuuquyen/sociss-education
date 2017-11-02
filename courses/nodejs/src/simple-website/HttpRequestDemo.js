const http = require('http');
const options = {
  port: 80,
  method : 'GET',
  hostname: 'sociss.edu.vn'
};

const req = http.request(options);

req.setHeader('Content-Type', 'text/html');

// res is http.IncomingMessage
req.on('response', (res) => {
  // 200 Ok
  console.log(res.statusCode + ' '+ res.statusMessage);
  console.log(res.rawHeaders);
});

// Start request.
req.end();
