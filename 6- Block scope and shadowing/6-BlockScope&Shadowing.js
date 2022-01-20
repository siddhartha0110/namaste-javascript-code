if(true){
    //Compound Statement
    var test=10;
    console.log(test);
}

{
    var a=10;
    let b=20;
    const c=30;
    console.log(test);
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
//console.log(b); //Uncaught ReferenceError: b is not defined
//console.log(c); //Uncaught ReferenceError: c is not defined

var ashadowex=12345;
let sha2=987;
console.log(ashadowex);
console.log(sha2);
{
    var ashadowex=123;
    let sha2=987654;
    console.log(ashadowex);
    console.log(sha2);
}
console.log(ashadowex);
console.log(sha2);

