// Create a function called hello that print your name on the console
function hello(){
    console.log("Eric");
}

// Create a function called Add has two input number1 and number2 
// Return -> the add total from this two number
function Add(number1, number2)
{
    return number1 + number2;
}
// Create a function called sub has two input n1 and n2 
// Return -> the sub total from this two number
function Sub(n1,n2)
{
    return n1 - n2;
}

// Create a function called times has two input x and y 
// Return -> the times total from this two number
function times(x,y)
{
    return x * y;
}

// Create a function called divid has two input a and b 
// Return -> the divid total from this two number

function divid(a,b){
    return a/b;
}

// Create a function called RunThisProgram 
function RunThisProgram(){
    hello();
    console.log("Add - The Result is : " + Add(1,2) );
    console.log("Sub - The total is : " + Sub(4,4) );
    console.log("Times - The result is : " + times(7,8) );
    console.log("Divid - The result is : " + divid(10,2) );
}

// At the beginning, run the hello function

// 1. that execute a the add function to add two number
// number 1 = 1 , number 2 = 2
// console.log("The result is " + addTotal);

// 2. that execute a the sub function to sub two number
// n1 = 4 , n2 = 4
// console.log("The result is " + subTotal);

// 3. that execute a the times function to times two number
// x = 7 , y = 8
// console.log("The result is " + timesTotal);

// 4. that execute a the divid function to divid two number
// x = 10 , y = 2
// console.log("The result is " + dividTotal);


// call the RunThisProgram function

RunThisProgram();