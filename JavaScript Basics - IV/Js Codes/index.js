//decalring and defining a function
function run() {
    console.log("Running");
}
//Calling a function
run();

//Named function assignment
let exercise1 = function walk() {
    console.log("Walking");
}
exercise1();
let jump = exercise1;
jump();

//Anonymous function assignment
let exercise2 = function () {
    console.log("Walking again");
}
exercise2();

function sum1(a, b) {
    return a + b;
};
console.log(sum1(1, 2)); //will give o/p: 3

console.log(sum1(1)); //will give o/p : NaN because when we pass less than or no argument in
//paramterized method, then the js automatically passed undefined in place of missing argument.

console.log(sum1()); //will give NaN again

console.log(sum1(1, 2, 3, 4, 5)); //will give 3 and all the numbers stored in arguments object

//argument object in JavaScript
function sum2(a, b) {
    console.log(arguments);  //argument object stores all the value inside it in key value pairs
    return a + b;
}
console.log(sum2(1, 2)); //3
console.log(sum2(1, 2, 3, 4, 5)); //3 

//creating function arguments dynamic by accesing all values from argument object
function sum3() {
    let total = 0;
    for (let val of arguments) {
        total += val;
    }
    return total;
}
console.log(sum3()); //0
console.log(sum3(4, 5)); //9
console.log(sum3(1, 2, 3, 4)); //10

//Rest opeartor ...
function sum4(...args) { //here args is an array that stores the value, not an object
    console.log(args); //[1, 2, 3, 4, 5]
};
sum4(1, 2, 3, 4, 5);

//rest operator with other arguments
function sum5(val1, ...args) { //here 1st paramter will store 1 and rest params are stores in args array
    console.log(args); //[2, 3, 4, 5]
}
sum5(1, 2, 3, 4, 5);

//default parameters
function interest(p, r, t = 10) {
    return p * r * t / 100;
}

console.log(interest(1000, r = 10));

function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));  // Output: 10
  console.log(multiply(5));  // Output: 5
  console.log(multiply(5, undefined));  // Output: 5
  

//getter and setter
let person = {
    fname: "Nisi",
    lname: "Kumar",
    get fullName(){
        return this.fname + ' ' + this.lname;
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
        
    }
    
};
console.log(person.fullName);
//In this code, we’ve defined an object person with properties fname, lname, and a getter method fullName.
//it will output "Nisi Kumar". This is because the fullName getter method accesses
//the fname and lname properties of the person object.
//Note that you don’t need to use parentheses when calling a getter method.
//It can be accessed like a property.
person.fullName = 'Nishant Kumar';
console.log(person.fname + " " + person.lname);

//Another example
const student = {
    firstName: 'Ram',
    get getName() {
      return this.firstName;
    },
    /**
     * @param {string} newName
     */
    set changeName(newName) {
        this.firstName = newName;
      }
  };
  console.log(student.firstName);  // Output: Ram
  student.changeName = 'Shyam';
  console.log(student.firstName);  // Output: Shyam


//Hoisting in JavaScript
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5



  