console.log('JS LOAded');
console.log('Start');

setTimeout(function() {
    console.log('Timer Finished');
},2000);

fetch("https://putsreq.com/3AbXaISs5TjaEO5aOBU0")
    .then(function(response) {
        console.log(response);
        console.log('Success');
    })
    .catch(function(err) {
        console.log(err);
    })

console.log('End');