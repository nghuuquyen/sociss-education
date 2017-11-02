// JS object define.
var object = {
  name : 'Person A',
  age : 20,
  job : 'Developer'
};


// Cover object to JSON string.
var JSONStr = JSON.stringify(object);
console.log('Should be string :', typeof JSONStr === 'string');


// Cover JSON string to object.
var _object = JSON.parse(JSONStr);
console.log('Should be object: ', typeof _object === 'object');

// Catch exception when on invalid input data.
try {
  JSON.parse('THIS IS NOT JSON STRING, WILL FIRE ERROR !!!');
} catch (e) {
  console.log('Should have error on invalid input: ', e !== undefined);
}
