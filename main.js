//------------------------------------while gameOver
var gameOver = false;
while (gameOver) {
  console.log("game is over");
}

//------------------------------------For loop
var array = ['string1', 'string2', 'string3'];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}


//------------------------------------While Loop
var j = 0;
while (j < 5) {
  console.log('this loop has run' + j + 'times');
  j++
}


//------------------------------------Do While loop (the loop will always run the code once before checking the condition)
var number;
do {
  number = Math.random();
  console.log(number);
} while (number < 0.5);


//------------------------------------For In loop
//
var myObject = new Object();
myObject.a = "1";
myObject.b = "2";
myObject.c = "3";

for (var key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}


//------------------------------------FizzBuzz Challenge
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
