// 문제 의도: 함수 축약

// 다음 함수들을 축약해서 작성해 보세요.

// (1)
// function add(a, b) {
//   return a + b;
// }

// (2)
// function isEven(num) {
//   if(num % 2 === 0) return true;
//   return false;
// }

// (3)
// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age
//   }
// }

const add = (a, b) => a + b;
const isEven = (num) => num % 2 === 0;
const createPerson = (name, age) => ({ name, age });
