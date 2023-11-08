//==========================================Creating an array===============================================

//Using array literal
let nums1 = [1, 2, 3, 4, 5]; 
console.log(nums1); //

// using the Array constructor
let nums2 = new Array(1, 2, 3, 4, 5);
console.log(nums2);

//Empty array
let nums3 = [];
nums3[3] = 1 //adding element later


// ================================Iterating and Accessing Array Elements===================================

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1[0]); // "Apple" an array

//Using for-of loop
let numberArr = [1, 2, 3, 4, 5];
for (let num of numberArr)
    console.log(num);

//Using for-each loop
let NumberArr = [9, 8, 7, 6, 5];
NumberArr.forEach(val => console.log(val));


//==================================Modifying Array Elements===============================================

let fruits2 = ["Apple", "Banana", "Mango"];
fruits2[0] = "Peach"; // change "Apple" to "Peach"

//=================================Adding New Elements in Array============================================
//Insertion at end
nums1.push(9);
console.log(nums1);

//Insertion at begin
nums1.unshift(0);
console.log(nums1);

//Insertion at middle
nums1.splice(1, 0, 'A', 'B'); //splice(begin index, number of elements to be deleted, insert1,insert2,.. )
console.log(nums1); //[0, 'A', 'B', 1, 2, 3, 4, 5, 9]

//=================================Searching Elements in Array=============================================

//When we search for primitives in the array we have indexOf() and include() method
console.log(nums1.includes(3)); //true
console.log(nums1.includes(11)); //false

console.log(nums1.indexOf(3)); //it will return index if the element is present
console.log(nums1.indexOf(4, 1)); //it will return index if the element is present
console.log(nums1.indexOf(6, 2)); //it will return -1 because the element is not present
 
//Searching in Array of objects
let nameArr = [
    { id: 1, name:"Nishant" },
    { id: 2, name: "Nisi" }
];

console.log(nameArr.indexOf({ id: 1, name: "Nishant" })); //will give output -1 everytime, meaning object
//is not present 
console.log(nameArr.includes({ id: 2, name: "Nisi" })); //will give output false everytime, meaning object
//is not present beacause the references are different for the object inside the array and the object we
//are searching for although they look similar.

//Using find() method : it searches and returns the object
let nameObj1 = nameArr.find(function (Studentname) {
    return Studentname.name === "Nishant" ;
})
console.log(nameObj1);

//If we want to replace an object once you find it, we can do so like this:
let arr = [
    { name: 'string1', value: 'this' },
    { name: 'string2', value: 'that' }
];
arr.find(function (ob, index) //So in this case, index represents the index of the current object
//in the arr array.The initial value of index is 0, which corresponds to the first element in the array.
{
    if (ob.name === 'string1') {
        arr[index] = { name: 'new string', value: 'this' };
        return;
    }
});
console.log(arr); //In this example, find() replaces the first object
//in the arr array where the name property is "string 1"

let nameObj2 = nameArr.find(Studentname => Studentname.name ==="Nisi") //Using arrow function
console.log(nameObj2);

//=======================================Callback Function=================================================

function myDisplay(some) {
    console.log(`Sum is ${some}`);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 7, myDisplay); //In this example , myDisplay is the callback function.
//It is passed to myCalculator() as an argument.

//=======================================Arrow Functions===================================================
let myFunction1 = function (a, b) {
    return a * b;
}

//The above function can be written using Arrow function like this:
let myFunction2 = (a, b) => a * b;


//=================================Removing Elements From Array============================================

//Using pop() method
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numArr.pop(); //remove element from last index
console.log(numArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Using shift method
numArr.shift(); //remove element from the starting index
console.log(numArr); //[2, 3, 4, 5, 6, 7, 8, 9]

//Using splice() method
numArr.splice(1, 2); //remove elements from any particular index
console.log(numArr); //[2, 5, 6, 7, 8, 9]

//======================================Emptying an Array==================================================

//Using []
let arrNum1 = [1, 2, 3, 4, 5];
arrNum1 = []; //It can empty the array but not a recommended practice
console.log(arrNum1); //[]

//Using length property
let arrNum2 = [1, 2, 3, 4, 5, 6, 7];
arrNum2.length = 0; // It will empty the array and also a good practice
console.log(arrNum2); //[]

//Using splice() method
let arrNum3 = [1, 2, 3, 5, 6, 7, 8, 9, 10];
arrNum3.splice(0, arrNum3.length);
console.log(arrNum3); //[]

//Using loops and pop()  method
let arrNum4 = [1, 2, 3, 4, 5];
let len = arrNum4.length - 1;
while (len >= 0) {
    arrNum4.pop();
    len--;
    
}
 console.log(arrNum4); //[]

//===================================Combining of Arrays===================================================

//Combining of arrays of primitives:

//Using concat() method
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];
let Combining = arr1.concat(arr2);
console.log(Combining); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//Using spread operator
let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [7, 8, 9, 10];
console.log([...firstArr,'a','b',...secondArr]) //[1 2 3 4 5 6 'a' 'b' 7 8 9 10]

//Combining of array of objects:

//Using concat() method
let arrayOfObject1 = [{ objName: "Nisi", age: 21 }, { objName: "Nishant", age: 22 }];
let arrayOfObject2 = [{ objName: "Rishu", age: 22 }, { objName: "Satyam", age: 21 }];
let combinedArrayOfObj1 = arrayOfObject1.concat(arrayOfObject2);
console.log(combinedArrayOfObj1);

//Using spread operator
let arrayOfObject3 = [{ objName: "Nisi", age: 21 }, { objName: "Nishant", age: 22 }];
let arrayOfObject4 = [{ objName: "Rishu", age: 22 }, { objName: "Satyam", age: 21 }];
let combinedArrayOfObj2 = [...arrayOfObject3, ...arrayOfObject4];
console.log(combinedArrayOfObj2);

//========================================Slicing of Arrays================================================

//Slicing of Arrays of Primitives:

//Using slice() method
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.slice(2, 6)); //[3, 4, 5, 6]

//Slicing of Arrays of Objects:

//Using slice() method
let arrOfObj = [{ objName: "Nisi", age: 21 }, { objName: "Nishant", age: 22 },
{ objName: "Rishu", age: 22 }, { objName: "Satyam", age: 21 }];

console.log(arrOfObj.slice(0, 2));

//=====================================Joining The Elements of Array=======================================

//Using join() method
let Arr = [10, 20, 30, 40, 50];
console.log(Arr.join('-')); //10-20-30-40-50

//=====================================Splitting The Elements of Array=====================================

//Using split() method
let msg = "This is my first message";
console.log(msg.split(" ")); //split() method always returns the array

//=========================================Sorting Arrays==================================

//Sorting array of primitives using sort() method
let nums = [40, 1, 5, 100, 10, 7];
nums.sort((a, b) => a - b);
//sort() method modifies the original array
console.log(nums); // [1, 5, 7, 10, 40, 100]

//Sorting array of objects using sort() method
let employees = [{
    fname: "Nishant", lname: "Kumar", age: 21
},
    {
    fname: "Nisi", lname: "Singh", age: 20
},
    { fname: "Rishu", lname: "Roy", age: 23 }];
employees.sort((a, b) => a.age - b.age);

employees.forEach((e) => {
    console.log(`${e.fname} ${e.lname} ${e.age}`);
  });

//=========================================Reversing The Elements of Arrays==================================

//Using reverse() method
let numsArray = [8, 0, 2, 5, 1, 9, 3];
numsArray.reverse();
//reverse() method reverse the actual array
console.log(numsArray); // [3, 9, 1, 5, 2, 0, 8]
//=========================================Filtering the Arrays=============================================

//Using filter() method on array of primitives
let numsArr = [2, -4, 8, 7, 0, -3, -1, 4, -22, -5, 70];
let posValue = numsArr.filter(num => num >= 0);
console.log(posValue); // [2, 8, 7, 0, 4, 70]

//Using filter() method on array of objects
let emp = employees.filter(Age => Age.age > 20);
console.log(emp);

//==========================================Mapping the Arrays=============================================

//Using map() method
let NumsArr = [1, 2, 3, 4, 5];
let res = NumsArr.map(numVal => ({value: numVal }
));
console.log(res); //[{value: 1}, {value: 2},{value: 3}, {value: 4}, {value: 5}]

//==========================================Reducing the Arrays========================================

//Using reduce() method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((total, num) => total + num, 0); //Here total is Accumulator, num is currentValue
//and 0 is initialValue
console.log(sum);

//============================================Chaining in JavaScript====================================
var firstName = " Rajat ";
console.log(firstName);  // Output: " Rajat "
var modifiedName = firstName.toUpperCase().trim();
console.log(modifiedName);  // Output: "RAJAT"
//In this example, toUpperCase() and trim() are chained together to modify the firstName string


//Another example for chaining in JavaScript
function Land() {
    this.area = '';
    this.status = 'for Sale';
  }
  
  Land.prototype.open = function() {
    this.status = 'Open for Sale';
    return this;
  }
  
  Land.prototype.close = function() {
    this.status = 'Not for Sale';
    return this;
  }
  
  Land.prototype.setParams = function(area) {
    this.area = area;
    return this;
  }
  
  Land.prototype.doorStatus = function() {
    console.log('The', this.area, 'Land is', this.status);
    return this;
  }
  
  var land = new Land();
  land.setParams("500 sq ft")
    .close()
    .doorStatus() // The 500 sq ft Land is Not for Sale
    .open()
    .doorStatus(); // The 500 sq ft Land is Open for Sale
  



