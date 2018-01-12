// #1 - FizzBuzz
function FizzBuzz(n) {
  var result = '';

  for(let i = 0; i<n; i++) {
    if(i % 15 === 0) { result += 'FizzBuzz '; continue; }
    if(i % 3 === 0) { result += 'Fizz '; continue; }
    if(i % 5 === 0) { result += 'Buzz '; continue; }

    result += i + ' ';
  }

  document.write('<h1>1. FizzBuzz</h1>');
  document.write('<h4>N = ' + n + '</h4>');
  document.write(result);
}

FizzBuzz(100);

function sortArray(a) {
  document.write('<h1>2. Sort Array</h1>');
  if(a instanceof Array) {
    document.write('<h4> Origin Array </h4> ' + a);
    return a.sort();
  }

  throw new Error('Input is not array type !');
}

document.write('<h4> Sorted Array </h4> ' + sortArray([1, 5, 7, 1 ,12 ,12 ,6 ,9 ,10]));

function randomString(length) {
  var text = "";
  var charsets = "ABCDEFIJKOUPQRS123456789";

  for (var i = 0; i < length; i++) {
    text += charsets.charAt(Math.floor(Math.random() * charsets.length));
  }

  return text;
}

document.write('<h1>3. Get Random String With 12 Characters</h1>');
document.write(randomString(12));


function checkExam(a, b) {
  var result = 0;

  for(i in a) {
    if(a[i] === "" || b[i] === "") {
      continue;
    }

    if(a[i] === b[i]) {
      result += 4;
    } else {
      result -= 1;
    }
  }

  return result < 0 ? 0 : result;
}

document.write('<h1>4. Check the exam</h1>');
document.write('<h3>Student answers is </h3>' + ["a", "c", "b", "d"] );
document.write('<h3>Correct results is </h3>' + ["a", "d", "b", "a"]);
document.write('<h3>Mark</h3>' + checkExam(["a", "c", "c", "d"], ["a", "d", "b", "a"]));


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
function uniqueInOrder(text) {
  var result = [];
  var last;

  for (var i = 0; i < text.length; i++) {
    if (text[i] !== last) {
      result.push(last = text[i]);
    }
  }

  return result;
}

document.write('<h1>5. Unique In Order</h1>');
document.write('<h3>Have AAAABBBCCDAABBB</h3>');
document.write(uniqueInOrder('AAAABBBCCDAABBB'));
