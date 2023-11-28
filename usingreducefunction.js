// Find the product of array elements using reduce function.

const array = [5,1,4,9];
const product = array.reduce((accumulator,currentValue) =>accumulator*currentValue, 1);
console.log(product);



const p= (arr) => {
    const result = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return result;
  };
  const numbers = [2, 3, 4, 5];
const products = p(numbers);
console.log(products);



const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
    { name: "Eve", age: 21 }
  ];