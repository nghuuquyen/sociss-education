"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs = require('express-hbs');

// Do Registration routes.
app.use(require('./app/routes'));

// Set static content.
app.use('/', express.static('./public'));


// Set view template engine for file extension server.view.html
app.engine('server.view.html', hbs.express4({
  extname: '.server.view.html'
}));

// Set view engine
app.set('view engine', 'server.view.html');

// Set views folder
app.set('views', './app/views');


app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
