const ages = [16,19,21,33,45,54,63,71];


// long version
function checkAge (age){
    return age > 18;
}
const ageAdult = ages.find(checkAge);
console.log(`ageAdult:`, ageAdult); 


// Anonymous Fuction - shorter version
const ageAdult2 = ages.find(function(age) {
    return age > 18;
});


//arrow function
const ageAdult3 = ages.find((age) => {
    return age >18;
})


// Arrow Function one liner slightly longer
const ageAdult4 = ages.find ( (age) => { return age > 18 } );

// Arrow Function one liner
const ageAdult5 = ages.find (age => age > 18 );


console.log('ageadult4:', ageAdult4);