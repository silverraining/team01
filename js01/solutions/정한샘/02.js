console.log(x); //error
console.log(y); //error
console.log(z); //error

function f() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); //10
  console.log(y); //error
  console.log(z); //error
}

f();