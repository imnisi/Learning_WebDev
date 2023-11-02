console.log('Hello');

//creation of object
let obj = {
    objName: 'Nisi',
    objAge: 21,
    objId: 101,
    msg: function () {
        console.log('Good Afternoon');
    }
};
console.log(obj);
console.log(obj.objName);
console.log(obj.objAge);
console.log(obj.objId); 
console.log(obj.msg()); 

//Factory function
//creating a factory function which always return a rectangle object.
function createRectangle() {
    return rectangle = {
        length: 1,
        breadth: 2,
        draw: function () {
            console.log('drawing rectangle');
        }
    };   
};
// creating object
let rectangleObj1 = createRectangle();
console.log(rectangleObj1);

//with paramters
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
//Creating obj 
let person1 = createPerson('Nishant', 'Kumar');
console.log(person1.getFullName());

let person2 = createPerson('Kishu', 'Kumar');
console.log(person2.getFullName());

//Constructor function
//creating a constructor function 
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;

    this.getName = function() {
        return this.firstname + ' ' + this.lastname;
    }
}
//creating object
let myFather = new Person("Shyam", "kumar", 30, "blue");
console.log(myFather.age);
console.log(myFather.getName());