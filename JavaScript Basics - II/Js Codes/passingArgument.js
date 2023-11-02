//Js supports pass by value for primitives for functions or methods

function increment1(num) {
    num = num + 1;
}
let num = 10;
//Value before increment function
console.log(num);
increment1(num);
//Value after increment function
console.log(num);

//Js support pass by reference for reference type 
function increment2(obj) {
    obj.value++;
}
let obj = { value: 10 };
//Value before increment function
console.log(obj.value);
//Value after increment function
increment2(obj);
console.log(obj.value);

