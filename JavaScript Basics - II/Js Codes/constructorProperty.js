//Constructor property
function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.area = function () {
        return this.length * this.breadth;
    }
}

let rectObj = new Rectangle(5, 4);
console.log(rectObj.area());
console.log(rectObj.length);
console.log(rectObj.constructor); //calling and printing the rectObj constructor.
//It will print the whole body of its constructor,that is Rectangle constructor.
     //Rectangle(length, breadth) {
    // this.length = length;
    // this.breadth = breadth;
    // this.area = function () {
    //     return this.length * this.breadth;
    // }
// }

// This line now calls and prints the default constructor (it's name is Function) of Rectangle constructor
//(which is already a constructor of rectObj). In JavaScript even a function is also an object.
// Every object in Js have a constructor.
//when we try to print, it will give empty body right now.
console.log(Rectangle.constructor); 

//Now, we try to put the whole body inside the default inbuilt constructor.
let Rectangle1 = new Function('length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.area = function () {
    return this.length * this.breadth;
}`);

let rect = new Rectangle1(2, 3);
console.log(rect);
