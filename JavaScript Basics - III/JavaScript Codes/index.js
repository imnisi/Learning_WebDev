//Math object in JavScript
console.log(Math.random());
console.log(Math.round(1.2));
console.log(Math.max(2, 5, 9, 1, 4));
console.log(Math.min(2, 4, 1, 9, 0));
console.log(Math.abs(-1));
console.log(Math.abs(2));
console.log(Math.PI);


//Template literals and escape sequences
console.log("Hello");
console.log('"Hello"');
console.log("'Hello'");
console.log(`"Hello"`); //Using backticks character
console.log('\'hello\''); //using \'
let nameVar = "Nisi";
console.log(`This is
${nameVar} first
message`);

//Date and Time

let date = new Date();
console.log(date)

let date2 = new Date('May 22 2002 12:00');
console.log(date2);

let date3 = new Date('2002 May 22 12:07'); //any sequence we can give
console.log(date3)

let date4 = new Date(2002, 4, 22, 12);
console.log(date4);

date2.setFullYear(2001);
console.log(date2);