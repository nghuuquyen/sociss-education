console.log('1. Demo For Loop.');

for(var i=0; i<= 5; i++) {
  console.log(i);
}

console.log('2. For loop item in array.');
var arrays = ['A', 'B', 'C', 'D', 'E'];

for(var item in arrays) {
  console.log(arrays[item]);
}

console.log('3. For each function of arrays.');

arrays.forEach(function onEachItem(_item) {
  console.log(_item);
});

console.log('4. Arrow function for forEach.');
arrays.forEach(_item => {
  console.log(_item)
});
