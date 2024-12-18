function transform(number, callback, d) {
  //여기에 코드 작성
  return callback(number, d);
}

//callback 작성
const multiple = (number, d) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (i % d === 0) result.push(i);
  }
  return result;
};

//최대값
let number = 20;

//1~m 사이의 수 중에서 2의 배수
let d = 2;
const a = transform(number, multiple, d);
console.log(a);

//1~m 사이의 수 중에서 3의 배수
d = 3;
const b = transform(number, multiple, d);
console.log(b);
