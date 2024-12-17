function Hello(name, callback) {
  const hi = '안녕하세요 내 이름은 ' + name + ' 입니다.';
  
  callback(hi);
}

Hello("한샘", (name) => console.log(name)) // 안녕하세요 내 이름은 한샘 입니다.;

/*
const print = function(name) {
  console.log(name);
}
Hello("한샘", print);
*/