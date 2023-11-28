// Find maximum of array elements using function.(Arrow Function)


// let array=(a)=>{
//     let max=0;
//     for(let i=0;i<a.length;i++){
//       if (max<a[i]){
//         max=a[i];
//       }
//     }return max;
//   }
//   const a=[1,2,3,-14,599];
//   console.log(array(a));


const arr = [1, 2, 3, 4, 5];

const findMax = (arr) => {
  let max = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }
  }
  return max;
};

console.log(findMax(arr));



let max = (array) => {
    let max = Math.max(...array);
    return max;
  };
  
  console.log(max([1, 2, 3, 4, 5]));