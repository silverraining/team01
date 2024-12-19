function squareOfTheSum(n){
  let num = 0;
  for (let i = 1; i <= n ; i++) {
    return sum += i;
  }
  return num * num;
}

function sumOfTheSquares(n){
  let num = 0;
  for (let i = 1; i <= n ; i++) {
    return sum += i * i;
  }
  return num ;
}

const n = 10;
squareOfTheSum(n){...} // n개의 자연수 합의 제곱 
sumOfTheSquares(n){...} // 제곱의 합
const a = squareOfTheSum(n); // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
const b = sumOfTheSquares(n); // 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
console.log(a - b);