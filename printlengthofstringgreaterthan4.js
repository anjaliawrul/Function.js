// Find the length of strings in a string array and print all the strings whose length is grater than 4 .

const array = ['adg', 'gsf', 'sfdkhkhlkhf']
const Array1 = array.filter(item => item.length > 5)
console.log(Array1)


const stringArray = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
const filteredArray = stringArray.filter((str) => str.length > 5);
console.log(filteredArray);


let arr =  ['apple','stawberry','banana','Blackberry'];
const lengthArr = arr.filter((value) => value.length >5);
console.log(lengthArr);