//Strings in JavaScript
let nameVar = "Nisi";
console.log(typeof (nameVar)); //primitive String

//Now, when you try to call a method on a string primitive,
//JavaScript automatically converts the string primitive to a temporary string object,
//calls the method on that object, then discards the temporary object.
//This process is known as autoboxing1.
console.log(nameVar.length); //4
console.log(nameVar.toUpperCase()); //"NISI"  

//Creating String object
let nameObj = new String("Nisi"); //Using String constructor 
console.log(typeof (nameObj)); //Object String

//indexOf() method
let greeting = "Hello, World!";
let index1 = greeting.indexOf("World"); //returns the index of string
console.log(index1); // 7

let greet = "Hello, World, World!";
let index2 = greet.indexOf("World", 8); //second param which determines the postion to start the search
console.log(index2); // 14


///Slice() method
let text = "Welcome to the world of JavaScript";
let parts = text.slice(8,13);
console.log(parts); //"to th"

//Substring() method
let str1 = "Welcome to the world of JavaScript";
let parts1 = str1.substring(8, 13);
console.log(parts1); //"to th"
let parts2 = str1.substring(-7, 4); //internally it becomes substring(0,4)
console.log(parts2); //"Welc"
let parts3 = str1.substring(-9, -3); //internally it becomes substring(0,0)
console.log(parts3); //""

//Replace() method
let str2 = "Please visit Microsoft office!";
let newtext = str2.replace("Microsoft", "Google");
console.log(newtext); //"Please visit Google office"

//toUpperCase and to LowerCase()
let str3 = "Welcome to the world of JavaScript";
console.log(str3.toUpperCase()); //WELCOME TO THE WORLD OF JAVASCRIPT
console.log(str3.toLowerCase()); //welcome to the world of javascript

//trim() method
let str4 = "    Welcome to the world of JavaScript    "
console.log(str4.trim()); //"Welcome to the world of JavaScript"

//charAt(index)
let str5 = "Welcome to the world of JavaScript";
console.log(str5.charAt(4));//'o'

//split(separator) method
let str6 = "Welcome to the world of JavaScript";
console.log(str6.split(" ")); //returns an array of substring ['Welcome', 'to', 'the', 'world', 'of', 'JavaScript']

//concat() method
let firstName = "Nishant";
let lastName = "Kumar";
const fullName = firstName.concat('-', lastName); 
console.log(fullName); //"Nishant-Kumar"

//includes() method
let msg = "Welcome to the world of JavaScript";
console.log(msg.includes("the")); //true
console.log(msg.includes("Python")) //false

//startsWith() and endsWith() method
let str7 = "Welcome to the world of JavaScript";
console.log(str7.startsWith("the", 11)) //true, at index 11 string starts with "the"
console.log(str7.startsWith("world", 0)) //false
console.log(str7.endsWith("the", 14)) //true, at index 14 string ends with "the"
console.log(str7.endsWith("world", 20 ))//true
