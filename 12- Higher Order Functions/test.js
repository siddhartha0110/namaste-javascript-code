console.log("Start");

setTimeout(() => {
    console.log("Timer has expired");
}, 5000);

console.log("End");

let startDate=new Date().getTime();
let endDate=startDate

while (endDate<startDate+10000) {
    endDate=new Date().getTime();
}

console.log("while expires");
//Calculate Area,Circumference and Diameter of given Circle Radius
const radius=[3,1,2,4];

const area=function(radius){
    return Math.PI*radius*radius;
}

const circumference=function(radius){
    return Math.PI*radius*2;
}

const diameter=function(radius){
    return 2*radius;
}

// const calculate=function(radius,action){
//     const output=[];
//     for (let i=0; i<radius.length; i++){
//         output.push(action(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

Array.prototype.calculate=function(action){
    const output=[];
    for (let i=0; i<this.length; i++){
        output.push(action(this[i]));
    }
    return output;
}
console.log(radius.map(area));
console.log(radius.calculate(area));
