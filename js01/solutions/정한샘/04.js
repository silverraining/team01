function transform(number, callback, d) {
  let returnArray = [];
  for(let i = 1; i <= number; i++) {
    if(callback(i, d)) returnArray.push(i);
  }
  return returnArray;
}

const f = function(num, d) {
  if(num % d === 0) return true;
  return false;
}

//최대값
let number = 20;

//1~m 사이의 수 중에서 2의 배수
let d = 2;
const a = transform(n, f, d);
console.log(a);

//1~m 사이의 수 중에서 3의 배수
d = 3;
const b = transform(n, f, d);
console.log(b);