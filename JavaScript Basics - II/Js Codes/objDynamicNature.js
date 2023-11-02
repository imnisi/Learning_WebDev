//Dynamic nature of objects
function Student(name, rollno, age) {
    this.name = name;
    this.rollno = rollno;
    this.age = age;
}

studentObj1 = new Student('Nisi', 75, 21);
console.log(studentObj1.name + " " + studentObj1.rollno + " " + studentObj1.age);
studentObj1.grade = 'A'; //adding peoperties dynamically using dot operator
studentObj1['course'] = 'B.tech'; //adding properties dynamically using []
console.log(studentObj1.name + " " + studentObj1.rollno + " " + studentObj1.age + " " + studentObj1.grade + " " + studentObj1.course);
delete studentObj1['grade']; //deleting the properties
delete studentObj1.course;
console.log(studentObj1);

const obj1 = {
    Name: 'Nisi',
};
const obj2 = { age: 30 };
const mergedObject = {...obj1,...obj2};
console.log(mergedObject); //Using the spread operator




