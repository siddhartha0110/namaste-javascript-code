const arr=[5,4,1,7,8];

//Map Example 1 - Double arr, Triple arr, and find binary
//arr.map() performs the transformation logic to each and every element of the array

function double (val){
    return val*2;
}

const dbl=arr.map(double);

const trpl=arr.map(function(val){
    return val*3;
})

const bin=arr.map(x=>x.toString(2));

console.log(dbl);
console.log(trpl);
console.log(bin);

//Filter example - Used to filter the elements of the array
//Find odd and even in the array

function isEven(val){
    return val%2 === 0;
}

const evens=arr.filter(isEven);
const odds=arr.filter(ele=>ele%2);

console.log(evens);
console.log(odds);

//Reduce Example - Used when you have to read all the values of the array and come up with a single value.
//Find sum or max

//This is a basic find sum function
function findSum(val){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//Write the above logic in reduce
const sumTot=arr.reduce(function(acc,curr){  //acc-Accumulator (Collect the return result), curr-Current (Represents the current value in the array)
    acc=acc+curr;
    return acc;
},0);
console.log(sumTot); 

//Finding the max value
const maxVal=arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0);
console.log(maxVal)


//More Complicated Example 
const users=[
    {firstName:"Sahil",lastName:"Saxena",age:17},
    {firstName:"Chris",lastName:"Evans",age:40},
    {firstName:"Paul",lastName:"Rudd",age:52},
    {firstName:"Tom",lastName:"Holland",age:25},
    {firstName:"Test",lastName:"User",age:25}
]

//Find Full Names from the list of users
const fullNames=users.map(user=>user.firstName+" "+user.lastName);
console.log(fullNames);

//Find age of users and count Eg:- {17:1,25:2,40:1,52:1}
const ageArr=users.reduce((acc,user)=>{
    if(acc[user.age]){
        acc[user.age]+=1;
    }
    else{
        acc[user.age]=1;
    }
    return acc;
},{});
console.log(ageArr);

//Find firstName of users having age<30

const ageLessThan30=users.filter(user=>user.age<30).map(user=>user.firstName);
console.log(ageLessThan30);

//Using reduce
const ages=users.reduce((acc,user)=>{
    if(user.age<30){
        acc.push(user.firstName);
    }
    return acc;
},[]);
console.log(ages);