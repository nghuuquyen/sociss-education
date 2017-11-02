"use strict";

function test_1() { 
   if(true) {
     let num = 10;
   }

   console.log(num);
} 

function test_2() {
  for(let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function test_3() {
 outerloop: // This is the label name  
 for (var i = 0; i < 3; i++) {  
   console.log("Outerloop: " + i);  
   
   for (var j = 0; j < 5; j++) {  
      if (j == 3){  
         continue outerloop;  
      }  
      console.log("Innerloop: " + j );  
   }  
 }  
}

function test_4(){
 
 function Fun() {
   return {
     message : 'Yahhh'
   };
 }

 var a = Fun();
 var b = Fun();

 b.message = 'Change';

 console.log(a.message);
}

function test_5(){
 
 function Fun() {
   console.log(this);
   return this;
 }
 
 var a = Fun(); 
 var b = Fun();
 var a2 = new Fun();
 var b2 = new Fun();
 
 console.log(a === b);
 console.log(a2 === b2);
}

function test_6(){
 
 function Fun() {
   return {};
 }
 
 var a = Fun(); 
 var b = Fun();
 a.message = 'Hello World';
 console.log(b.message);
 var a2 = new Fun();
 var b2 = new Fun();
 
 console.log(a === b);
 console.log(a2 === b2);
}


function test_7() {
  console.log(_messageGlobal);
}

var _messageGlobal = 'Hello, i have hosting';

function test_8() {
  for(let i=0; i<10000000; i++) {
   (function() {
   
   })();
  }
}

test_7();

