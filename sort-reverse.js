const pages = [
    "home.html",
    "about.html",
    "porfolio.html",
    "socialmedia.html",
    "contact.html",
];

const pagesCopy = [...pages];

console.log(`Array original:`,pages);



const pagesSort = pagesCopy.sort();
const pagesSortReverse = pagesCopy.reverse();




console.log(`Array sorted:`,pagesSort);
console.log(`Array originalpost:`,pages);
console.log(`Array sort-reverse:`,pagesSortReverse);