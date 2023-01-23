// const numbers = [11,22,33,44,55,66,77];
const people = [
    {firstName: "Danny", lastName: "Ohman"},
    {firstName: "Giessell", lastName: "Cool"},
    {firstName: "Anthonry", lastName: "Style"}

];



// const numberMap = numbers.map( (element, index) => {
//     console.log(index, element);
// });

const peopleMap = people.map( (element, index) => {
    const eachPerson = `Person ${index+1} ${element.firstName} ${element.lastName}`
    console.table(eachPerson);
    return element;
});

console.table(peopleMap);