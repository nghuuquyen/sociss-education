/**
* @author Nguyen Huu Quyen
* @module controller
* @name author.server.controller
*/
"use strict";

let Services = require('../services');
let AuthorService = Services.Author;
let PostService = Services.Post;

module.exports = {
  findOne : findAuthorByUsernameOrId,
  renderAuthorPage : renderAuthorPage,
  renderAuthorPostsPage : renderAuthorPostsPage
};

/**
* @name renderAuthorPage
* @description
* Render HTTP page for view author information.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
*/
function renderAuthorPage(req, res) {
  res.render('author/view', {
    author : req.author
  });
}

/**
* @name renderAuthorPostsPage
* @description
* Render HTTP page list all posts of selected author.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
* @param  {object} next              Next middleware
*/
function renderAuthorPostsPage(req, res, next) {
  PostService.findPostsByAuthor(req.author.id).then(_posts => {
    res.render('author/posts', {
      author : req.author,
      posts : _posts
    });
  })
  .catch(err => next(err));
}

/**
* @name findAuthorByUsernameOrId
* @description
* Populate author data to HTTP request.
*
* @param  {object} req               HTTP request.
* @param  {object} res               HTTP response.
* @param  {object} next              Next middleware
* @param  {object} author            Author id or username.
*/
function findAuthorByUsernameOrId(req, res, next, author) {
  AuthorService.findByUsernameOrId(author)
  .then(_author => {
    req.author = _author;
    return next();
  })
  .catch(err => next(err));
}
