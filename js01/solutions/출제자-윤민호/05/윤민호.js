const transform = function (array, callback) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
      returnArray.push(callback(array[i]));
    }
    return returnArray;
  };
  
  const func2 = function (num) {
    return num * 2;
  };
  
  const func3 = function (num) {
    return num * 3;
  };

  const numbers = [1, 2, 3, 4];

// 각 요소를 2배로 반환
const a = transform(numbers, func2);
console.log(a); //[2, 4, 6, 8];

// 각 요소를 3배로 반환
const b = transform(numbers, func3);
console.log(b); //[3, 6, 9, 12]