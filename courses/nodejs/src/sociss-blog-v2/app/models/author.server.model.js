/**
* @author Quyen Nguyen Huu
* @module models
* @name   author.server.model
*/
"user strict";

let NotFoundError = require('../errors/NotFoundError');
let authors = [
  {
    id : '1111',
    fullName : 'Author A',
    username : 'author_a'
  },
  {
    id : '1112',
    fullName : 'Author B',
    username : 'author_b'
  }
];

module.exports = {
  findOne : findOne,
  getAll : getAll
};

/**
* @name getAll
* @description
* Get all authors.
*
* @return {promise.<array>} List of authors.
*/
function getAll() {
  return new Promise((resolve, reject) => {
    resolve(authors);
  });
}

/**
* @name findOne
* @description
* Find one author by username or id.
*
* @param  {string} _id        username or id
* @return {promose.<object>} Author object.
*/
function findOne(_id) {
  return new Promise(( resolve, reject ) => {
    for(i in authors) {
      if(authors[i].id === _id || authors[i].username === _id) {
        return resolve(authors[i]);
      }
    }

    reject(new NotFoundError(`Not found author with id or user name equal ${_id}`));
  });
}
