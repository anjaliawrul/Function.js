function add(a, b, c) {
    return a + b + c;
  }
  function multiply(a, b, c) {
    return a * b * c;
  }
  function sub(a, b) {
    return a - b;
  }
  const X = 23;
  
  function division(a, b) {
    return a / b;
  }
  
  export { add, multiply, sub, X };
  export default division; //default exports only one function/variable from a file






import { multiply, add, X, sub as subtract } from "./operations.js";
import * as operation from "./operations.js";
import division from "./operations.js";
// import div from "./operations.js";
  
const result1 = multiply(2, 3, 4);
const result2 = add(2, 3, 4);
const result3 = subtract(2, 3);
const result4 = operation.add(2, 3, 4);
const result5 = division(2, 3);
  
console.log(result1); // 24
console.log(result2); // 9
console.log(result3); //-1
console.log(result4); // 9
console.log(X);