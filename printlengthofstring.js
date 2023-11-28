// Find the length of strings in a string array and print all the strings length . Use map function

const arr=["mango","apple","banana","kiWi"];
let output=arr.map((len)=>{
  let length1=0;
  for(let i=0;i<len.length;i++){
    length1+=1
  }
  return length1;
})
console.log(output)



const array = ['adg', 'gsf', 'sfdf']
const Array1 = array.map(item => item.length)



const arry = ["apple", "grapes", "mango", "pineapple"];
console.log(arry);
const resultArray = arry.map((element) => {
   return element.length;
});
console.log(resultArray);


let a = ['apple','stawberry','banana','Blackberry'];

const lengthArr = a.map((value) => value.length);
console.log(lengthArr);


input=["apple","banana","grapes"];
const result=input.map((str)=>{
    return (str.length);
});
console.log(result);