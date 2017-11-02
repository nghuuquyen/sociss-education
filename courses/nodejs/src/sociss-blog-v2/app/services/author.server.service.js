/**
* @module services
* @author Quyen Nguyen Huu
* @name author.server.service
*/
"use strict";

let Author = require('../models').Author;

module.exports = {
  findByUsernameOrId : findByUsernameOrId,
  getAllAuthors : getAllAuthors
};

/**
* @name findByUsernameOrId
* @description
* Find one author by username or id.
*
* @param  {string} _param     Username or Id of author.
* @return {promise.<object>}  Author object.
*/
function findByUsernameOrId(_param) {
  // TODO: More business logic code here.
  return Author.findOne(_param);
}

/**
* @name getAllAuthors
* @description
* Get all authors in database
*
* @return {promise.<array>}  Authors.
*/
function getAllAuthors() {
  // TODO: More business logic code here.
  return Author.getAll();
}
