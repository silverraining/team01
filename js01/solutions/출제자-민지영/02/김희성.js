const array = [10, 3, 5, 32, 7, 12];

const isOdd = function isOdds (num) {
  return num % 2 !=== 0;
};
const isEven = function isEvens (num) {
  return num % 2 === 0 ;
};

function sum(arr, condition) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    if (condition(arr[i])) {
      total += arr[i]
    }
  }
  return total;
};

const odd = sum(arr, isOdd);
const even = sum(arr, isEven);
console.log(odd: odd);
console.log(even: even);



출력 : 
odd: 25
even: 54