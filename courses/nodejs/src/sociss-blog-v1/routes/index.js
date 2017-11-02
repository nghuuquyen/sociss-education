"user strict";

const coreRoutes = require('./core.server.routes');

module.exports = function(app) {
  coreRoutes(app);
};
