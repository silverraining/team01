// 1번째 문제!
// 문제 의도 : 콜백 함수의 이해
// 문제 설명
// 콜백함수를 이용하여 본인이름을 콘솔에 출력할 수 있게 해주세요

// 빈칸을 채워서 콜백함수를 완성해주세요
function Hello(name, callback) {
  const hi = "안녕하세요 내 이름은 " + name + " 입니다.";

  빈칸(hi);
}

Hello("민호", (name) => console.log(name)); // 안녕하세요 내 이름은 민호 입니다.;
