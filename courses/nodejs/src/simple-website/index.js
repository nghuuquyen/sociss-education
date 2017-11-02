"use strict";

let http = require('http');
const port = 3000;

// Step 1: Do create HTTP server.
let server = http.createServer(requestHandler);

/**
* @name when
* @description
* Call handler method correct on path and method request.
*
* @param  {object}   req      HTTP Request
* @param  {object}   res      HTTP Response
* @param  {string}   path     Path
* @param  {string}   method   HTTP method
* @param  {Function} callback handler function
*/
function when(req, res, path, method, callback) {
  if(req.url === path && req.method === method) {
    callback(req, res);
  }
}

// Step 2: Define handle function called each time we request server.
function requestHandler(request, response) {
  const userAgent = request.headers['user-agent'];
  const requestMethod = request.method;

  // Print to console your browser information.
  console.log('User Agent : ' + userAgent);
  console.log('Method :' + requestMethod);

  when(req, res, '/', 'GET', function (req, res) {
    return res.end('Hello Node.js Server!');
  });

  when(req, res, '/about', 'GET', function (req, res) {
    return res.end('This is about page!');
  });

  when(req, res, '/contact', 'GET', function (req, res) {
    return res.end('This is contact page!');
  });
}


// Step 3: Turn on server on port.
server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
