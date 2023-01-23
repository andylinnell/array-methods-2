const sports = ["soccer", "snowboarding", "tennis", "basketall", "baseball"];
const newSports = [...sports]

// const resultSport = newSports.splice(2);
// const resultSport1 = newSports.splice(2,1);
const jojo = newSports.splice(3,1, "Surfing","Blinking")

// console.log(`newSport:`, resultSport);
// console.log(`newSport:`, resultSport1);
console.log(`splice 2,1:`, newSports);

