/**
* @author Quyen Nguyen Huu
* @module routes
* @name   core.server.routes
*/
"user strict";

let router = require('express').Router();
let CoreCtrl = require('../controllers').Core;

router.route('/').get(CoreCtrl.renderHomePage);
module.exports = router;
