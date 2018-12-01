// it is how the function declare
function sayHello(){
    // When you call this function, it will runs all the code from this block
    console.log("Hello!");
    console.log("Edison");
    console.log("Hope You See How do I works in the program :D");
}

function sayHelloTo(name){
    // When you call this function, it will runs all the code from this block
    console.log("Hello!");
    console.log(name);
    console.log("I can Read the name from your input :D Do You see that?");
}

function calculateTheDaysIamInTheWorld(yearsOld){
    var days = 365;
    var daysYouLive = days * yearsOld;
    return daysYouLive;
}

// It is a function runs our function, if we don't call it out there. the program never runs
function RunThisProgram(){
    sayHello();
    sayHelloTo("Eric");
    var myDays = calculateTheDaysIamInTheWorld(25);
    console.log("I have been living in the earth at lease " + myDays + "days ");
}

RunThisProgram();