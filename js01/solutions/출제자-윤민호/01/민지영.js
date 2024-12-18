function Hello(name, callback) {
  const hi = "안녕하세요 내 이름은 " + name + " 입니다.";

  callback(hi);
}

Hello("민호", (name) => console.log(name)); // 안녕하세요 내 이름은 민호 입니다.;
