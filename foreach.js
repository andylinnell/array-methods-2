const ages = [11,21,33,45,55,65,71];

// const adults = ages.forEach( (element) => {
//     console.log(element);
// });

const adults = ages.forEach( (element, index) => { // index as your second parameter will post index of each element of array, can use without index.
    console.log(index, element);
});