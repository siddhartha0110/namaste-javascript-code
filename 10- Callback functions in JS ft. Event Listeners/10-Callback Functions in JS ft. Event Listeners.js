//Callback function in JavaScript

// setTimeout(function(){
//     console.log('Timer Out');
// },5000);

// function x(y){
//     console.log('x');
//     y();
// }
// x(function y(){
//     console.log('y');
// })

function attachEventListenerClosure(){
    let count=0;

    let btnClick=document.getElementById('clickMe');

    btnClick.addEventListener('click',function xyz(){
    console.log('Button Clicked',++count);
    });
}

attachEventListenerClosure();

