/**
* @module services
* @author Quyen Nguyen Huu
* @name post.server.service
*/
"use strict";

let Post = require('../models').Post;

module.exports = {
  findPostsByAuthor : findPostsByAuthor
};

/**
* @name findByUsernameOrId
* @description
* Find one author by username or id.
*
* @param  {string} _authorId  Author ID.
* @return {promise.<object>}  Author object.
*/
function findPostsByAuthor(_param) {
  return Post.findPostsByAuthor(_param);
}
