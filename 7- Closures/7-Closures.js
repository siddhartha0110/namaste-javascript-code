//Basic Closure Example

//Number 1
/* function x(){
    var a=7;
    function y(){
        var b=7;
        console.log(a);
    }
    y();
}
x(); */

 //Number 2
/*function x(){
    var a=7;
    function y(){
        var b=7;
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);

z();*/

//Number 3
/*function x(){
    var a=7;
    function y(){
        var b=7;
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
console.log(z);
z();*/

//Number 4
function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            var c=7;
            console.log(a,b);
        }
       y();
    }
    x();    
}
z();