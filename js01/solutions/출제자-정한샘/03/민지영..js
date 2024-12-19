var a = 1;
let b = 2;

function test() {
  var a = 3;
  let b = 4;
  console.log(a); // 3
  console.log(b); // 4
}

test();
console.log(a); // 1
console.log(b); // 2
