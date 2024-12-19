// 문제 의도: 스코프

// console.log()의 출력을 순서대로 작성하세요.

function f() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // 10
  console.log(y); // reference error
  console.log(z); // reference error
}

f();
