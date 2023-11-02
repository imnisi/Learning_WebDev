//object cloning in JavaScript

//Using Object.assign() method
let OriginalObject1 = { a: 1, b: 1 }
let ClonedObject1 = Object.assign({}, OriginalObject1);
console.log(ClonedObject1);

//Using spread syntax
let OriginalObject2 = { a: 2, b: 2 }
let ClonedObject2 = { ...OriginalObject2 };
console.log(ClonedObject2);

//Using a loop
let OriginalObject3 = { a: 3, b: 3 }
let ClonedObject3 = {};
for (let key in OriginalObject3) {
    ClonedObject3[key] = OriginalObject3[key];
}
console.log(ClonedObject3);