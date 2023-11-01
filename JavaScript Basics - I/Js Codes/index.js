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

//for-in loop
let Student = {
    name: 'Nisi',
    age: 21,
    rollno: 75
};
for (let key in Student) {
    //keys are reflected through keys
    //values are reflected through rectangle[keys]
    console.log(key, Student[key]);
}

//for-of loop
let obj = { a: 1, b: 2, c: 3 };

//If you try to use a for...of loop directly on an object,
//you’ll get a TypeError that says the object is not iterable
// for (let keys of obj) {
//     console.log(keys);
// }

//accesing keys using Object.keys() method
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

//access the values using Object.values() method
for (let values of Object.values(obj)) {
    console.log(values);
}
//access keys, values using Object.enteries() method
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}