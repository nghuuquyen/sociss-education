/**
* @author Quyen Nguyen Huu
* @module controllers
* @name   core.server.controller
*/
"user strict";

let AuthorService = require('../services').Author;

module.exports = {
  renderHomePage : renderHomePage
};

/**
* @name renderHomePage
* @description
* Do get all authors and render homepage.
*
* @param  {object}   req  HTTP Request
* @param  {object}   res  HTTP Response
* @param  {Function} next Next middleware
*/
function renderHomePage(req, res, next) {
  AuthorService.getAllAuthors().then(_authors => {
    res.render('home', {
      authors : _authors
    });
  })
  .catch(err => next(err));
}
