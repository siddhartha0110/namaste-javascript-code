/*
function x(){
    var i=10;
    setTimeout(function(){
        console.log(i);
    },2000);
    console.log("After setTimeout");
}
x();
*/

/*
function x(){
    for(var i=1;i<=5;i++) //var is in global scope and has a common memory and all the setTimeout refer to the same location of i.
    {
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("After setTimeout");
}
x();
Prints 6,6,6,6,6 not 1,2,3,4,5
*/ 

// function x(){
//     for(let i=1;i<=5;i++){  // works because let is block scoped and for every iteration a new block is allocated unlike var.
//         setTimeout(function(){
//             console.log(i);
//         },i*1000); 
//     }
//     console.log("After setTimeout");
// }
// x();
//Prints 1,2,3,4,5

//To make sure it works with var
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("Test in console");
}
x();