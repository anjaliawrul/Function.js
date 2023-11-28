// Take an input array of strings in lower case and print those strings in upper case whose length is greater than 3.

const str=["banana","apple","mango","kiwi","papaya"];
const upper=str.filter((str)=> str.length>4).map((x)=>x.toUpperCase());
console.log(upper);


const strings = ["name", "cla", "dd", "dndj"];
const result = strings.filter((str) => str.length > 3).map((str) => str.toUpperCase());
console.log(result);





let name = ["Chhout","prem","keyboard","ck"];

let re = name.filter((el)=>{
    if (el.length > 3){
        return el;
    }
}).map((el)=>el.toUpperCase())

console.log(re)