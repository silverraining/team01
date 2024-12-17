문제 의도: 콜백 함수와 배수

주어진 조건을 완성하세요.
이 함수는 숫자와 함수를 입력으로 받아, 배열의 각 요소에 콜백 함수를 적용한 새로운 배열을 반환합니다.

요구사항
함수는 세 개의 매개변수를 받습니다.:
number: 최대값
callback: 조건을 만족한 요소가 들어있는 배열
d: 배수

transform 함수는 배열을 반환합니다.


function transform(number, callback, d) {
  //여기에 코드 작성
}

//callback 작성

//최대값
let number = 20;

//1~m 사이의 수 중에서 2의 배수
let d = 2;
const a = transform(...);
console.log(a);

//1~m 사이의 수 중에서 3의 배수
d = 3;
const b = transform(...);
console.log(b);