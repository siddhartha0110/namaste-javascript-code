a()
//b(); //--> Will throw a typeError

//Function Statement aka Function Declaration
function a(){
    console.log("Function Statement a:called");
}

//Function Expression -> Cannot be hoisted as b stores undefined during the memory allocation phase
var b=function(){
    console.log("Function Expression b:called");
}


//Anonymous Function
// function(){

// }

//Named Function Definition
var c=function test(){
    console.log("Named Function Definition c:called");
}
c();
//test(); //->Uncaught Reference Error: c is not defined.This is because test is not created in the global scope


//Difference between Parameters and Arguments ?
var d=function(param1,param2){
    console.log(param1,param2);
}
var arg1=10;
var arg2=89;
d(arg1,arg2);

//First Class Functions
var fcf=function(param1){
    return function(){

    }
}
console.log(fcf);
console.log(fcf());
//Arrow Functions
