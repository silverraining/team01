문제 의도: 스코프

console.log()의 출력을 순서대로 작성하세요.


var a = 1;
let b = 2;

function test() {
    var a = 3;
    let b = 4;
    console.log(a); // a의 값은?
    console.log(b); // b의 값은?
}

test();
console.log(a); // 함수 밖 a의 값은?
console.log(b); // 함수 밖 b의 값은?
