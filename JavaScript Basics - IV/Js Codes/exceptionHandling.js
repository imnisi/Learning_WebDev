function checkNumber(num) {
    if (isNaN(num)) {
      throw new Error("Not a number");
    } else if (num < 0) {
      throw new Error("Negative number");
    } else if (num > 10) {
      throw new Error("Number greater than 10");
    }
    return num;
  }
  
try {
    let num = 1;
    console.log(typeof (num));
    console.log(checkNumber(num));

    num = 10;
    console.log(typeof (num));
    console.log(checkNumber(num));

    num = 'test';
    console.log(typeof (num));
    console.log(checkNumber(num)); // This will throw an error
    //Why after this line,the rest code is not executing for try block?
    //When an error is thrown inside a try block, the JavaScript interpreter immediately stops 
    //execution of the current block and moves to the catch block. Any code remaining in the try block 
    //will be skipped.
    //In your code, when num = 'test', the checkNumber(num) function throws an error 
    //because ‘test’ is not a number. This immediately stops the execution of the try block, 
    //and the interpreter moves to the catch block. Therefore, the remaining code in the try 
    //block (where num is a negative number or greater than 10) is not executed.
    
    num = -2;
    console.log(typeof (num));
    console.log(checkNumber(num));

    num = 12;
    console.log(typeof (num));
    console.log(checkNumber(num));
  } catch(err) {
    console.log(`Error: ${err.message}`);
  } finally {
    console.log("This will run regardless of the result");
  }
  