// Write a function which takes an array of numbers and returns and array of factorials of that numbers

const a=[1,2,3,4,5,6];
let arrow=(arr)=>{
    let n=[];
    for(let j=0;j<arr.length;j++){
        let fac=1;
        for(let k=1;k<=arr[j];k++){
                fac*=k;
        }
    n[j]=fac;
}   return n;
}

console.log(arrow(a));



let max=(array)=>{
    arr=[];
    for(i=0;i<array.length;i++){
        let k=1;
        for (j=1;j<=array[i];j++){
            k*=j
    }arr.push(k);
}
console.log(arr);}
max([2,4,0,5,6]);



const factorial = (arr) => {
    let fact = [];
    for (let i = 0; i < arr.length; i++) {
        let f= 1;
        for (let j = 1; j <= arr[i]; j++) {
            f*= j;
        }

        fact.push(f);
    }

    return fact;
}
const newa=factorial([2,4,3,7]);
console.log(newa)




const b = [1, 2, 3, 4, 5, 6, 0];
const factorials = (num) => {
  if (num === 0) return 1;
  let fac = 1;
  for (let k = 1; k <= num; k++) {
    fac *= k;
  }
  return fac;
};
const arrows = (arr) => {
  let n = [];
  for (let j = 0; j < arr.length; j++) {
    n[j] = factorials(arr[j]);
  }
  return n;
};

console.log(arrows(a));