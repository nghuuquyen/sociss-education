/**
* @author Quyen Nguyen Huu
* @module routes
* @name   author.server.routes
*/
"user strict";

let router = require('express').Router();
let AuthorCtrl = require('../controllers').Author;

// Resolve route params
router.param('author', AuthorCtrl.findOne);

// Public routes
router.route('/:author([a-zA-Z0-9.\-_]{8,30})')
.get(AuthorCtrl.renderAuthorPage);

router.route('/:author([a-zA-Z0-9.\-_]{8,30})/posts')
.get(AuthorCtrl.renderAuthorPostsPage);

module.exports = router;
