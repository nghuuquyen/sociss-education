/**
* @author Quyen Nguyen Huu
* @module models
* @name   post.server.model
*/
"user strict";

let posts = [
  {
    name : 'Post 1',
    author : '1111'
  },
  {
    name : 'Post 2',
    author : '1111'
  },
  {
    name : 'Post 3',
    author : '1111'
  },
  {
    name : 'Post 4',
    author : '1112'
  },
];

module.exports = {
  findPostsByAuthor : findPostsByAuthor
};

/**
* @name findPostsByAuthor
* @description
* Get all posts of author by author ID.
*
* @param  {string} _authorId Author ID.
* @return {promise.<Array>}  List Post of author
*/
function findPostsByAuthor(_authorId) {
  let _results = posts.filter(_post => _post.author === _authorId);

  return new Promise((resolve, reject) => {
    resolve(_results);
  });
}
