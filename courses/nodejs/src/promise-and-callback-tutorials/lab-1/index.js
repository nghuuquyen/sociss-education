const Q = require('q');

breakPromiseChain();
//breakPromiseChainV2();

function breakPromiseChain() {
  console.log('Do > breakPromiseChain');
  const promise = A()
  .then(B, handleErrorA)
  .then(C, handleErrorB)
  .then(D)
  .catch(err => {
     console.log('Handle all errors');
     console.log(err.message);
  });
  
  return promise;
}

function breakPromiseChainV2() {
  console.log('Do > breakPromiseChainV2');
  const promise = AVersion2()
  .then(B, handleErrorA)
  .then(C, handleErrorB)
  .then(D)
  .catch(err => {
     console.log('Handle all errors');
     console.log(err.message);
  });
  
  return promise;
}

function A() {
  // Take care if you throw error begin of A, it will lead to missing promise change.
  // @See AVersion2 to see how i handle error on A.
  console.log('Do > A');
  return Q.when('Done A');
}


function AVersion2() {
  console.log('Do > AVersion2');
  return Q.Promise((resolve, reject) => { 
    // Assume will will have error here.
    throw new Error('AVersion2 has error.');
    
    // return resolve if something work fine.
    //return resolve('Done A');
  });
}

function B(msg) {
  console.log(`Do > B with data is ${msg}`);
  // Assume will will have error here.
  throw new Error('B has error.');
  
  //return Q.when('Done B');
}

function C(msg) {
  console.log(`Do > C with data is ${msg}`);
  return Q.when('Done C');
}

function D(msg) {
  console.log(`Do > D with data is ${msg}`);
  return Q.when('Done D');
}

function handleErrorA(err) {
  console.log('Do > handleErrorA');
  return 'handleErrorA Done';
}

function handleErrorB(err) {
  console.log('Do > handleErrorB');
  console.log(err.message);
}
