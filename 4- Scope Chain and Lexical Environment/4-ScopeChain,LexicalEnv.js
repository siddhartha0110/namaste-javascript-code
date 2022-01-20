function a()
{
var b=10;
c ();
function c()
{
console.log(b); //10
}
}
a ();
console.log(b); //Not defined

/*
function a(){
    var test=1123;
    c();
    console.log(test); //1123
    function c(){
        console.log(b); //10
        console.log(rest); //100000
    }
}
var b=10;
var rest=100000;
console.log(b); //10
a();
console.log(test); //Error Not defined
*/ 