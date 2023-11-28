//  Write a function which takes an array of numbers and returns and array of factorials of that numbers using map function.

const input = [1, 2, 3, 4, 5, 6, 0];
const result = input.map((num) => {
  let fac = 1;
  for (let k = 1; k <= num; k++) {
    fac *= k;
  }
  return fac;
});
console.log(result);