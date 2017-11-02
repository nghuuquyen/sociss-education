function A() {
 return new Promise((resolve, reject) => {
  resolve('A successfully');
 });
}


function B() {
 return new Promise((resolve, reject) => {
  resolve('B successfully');
 });
}


A().then(B).then(result => {
  console.log('Done');
  console.log('Result: ' + result); 
});
