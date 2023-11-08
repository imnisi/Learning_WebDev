{
    let num1 = 5; //scope of num1 declared by let keyword is only in this block not outside than that
}
//console.log(num1); //it will give exception that num1 is not defined

{
    var num2 = 5; //scope of num2 declared by var is inside as well as outside the block.
}
console.log(num2); //It will not give error

function num() {
   
    var num3 = 5; //scope of var is function scoped only here.
};

//console.log(num3); //it will give error