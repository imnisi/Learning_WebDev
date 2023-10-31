console.log("Hello Nishant"); // String inside the log method
console.log('Hii Guys');

//creating variables using let keyword

let a = 6;
console.log(a);
let b = true;
console.log(b);

//const num = 12;
// num = 13;        // it will give error

let val = 10;
console.log(val);
val = 'Nishant Kumar';
console.log(val);
console.log(typeof(val));

//Arithmetic op
console.log(2 + 3);
console.log(3 - 2);
console.log(2 * 3);
console.log(10 / 2);
console.log(10 % 4);
console.log(10 ** 2);

//Comparison op
let num1 = 5;
let num2 = 3;
let num3 = '5';
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 === num2); //Strict equality: checks data type and value
console.log(num1 == num2);  //Loose equality: checks only value
console.log(num1 == num3);
console.log(num1 === num3);
console.log(num1 !== num2);

//Ternary op
let age = 25;
let eligibilty = age >= 18 ? 'Eligible for vote' : 'Not eligible for vote';
console.log(eligibilty);

//Logical operators with booleans and non - booleans
console.log(true || false);
console.log(true && false);
console.log(false || 'nisi'); 
console.log('nisi' || true);
console.log('nisi' && 0);
console.log('nisi' && 1);
console.log(false || 5 || 2);
console.log(false && 5 && 1);
console.log(false && 5 || 1); 

//Bitwise op
console.log(2 & 3);
console.log(2 | 3);

//if-else if-if
let marks = 98;
if (marks >= 90) {
    console.log('A');
} else if (marks >= 80) {
    console.log('B');

} else {
    console.log('C');
}

//Switch Case
let num = 2;
switch (num) {
    case 1: console.log('A');
        break;
    case 2: console.log('B');
        break;
    case 3: console.log('C');
        break;
    default: console.log('D');
}
//for loop
for (let i = 1; i <= 5; i++){
    console.log(i);
}

//while loop
let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}

//do-while loop
let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);