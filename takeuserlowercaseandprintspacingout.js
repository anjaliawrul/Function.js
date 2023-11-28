// Take an input array of words in lower case and print a proper sentence with spacing out of those words.

const array=["the", "man", "is", "playing"];
const result=array.reduce((acc,curr) => acc+" "+curr);
console.log(result)


const sen=["My","name","is","Rakhi"];
const str=sen.reduce((acc,curr)=> acc+curr+" "," ");
console.log(str)


let arrii = ['I', 'am', 'Intelligent'];

const newArr = arrii.reduce((acc, cur) => acc + ' ' + cur);
console.log(newArr);


const arr = ["the", "rich", "man","in","garden"];
const sentence = arr.reduce((acc, cv) => acc + " " + cv);
console.log(sentence);


const arrays=["apple", "colour", "is", "red"];
const results=arrays.reduce((r,p) => r+" "+p);
console.log(results)


const books = [
    { title: "The Great Gatsby", rating: 4.5 },
    { title: "To Kill a Mockingbird", rating: 4.8 },
    { title: "1984", rating: 3.9 },
    { title: "Pride and Prejudice", rating: 4.2 },
    { title: "The Catcher in the Rye", rating: 3.7 }
  ];



 