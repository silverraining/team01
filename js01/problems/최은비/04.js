//짱구와 친구들이 각자 좋아하는 음식이 담긴 배열
//특정 음식(예: "초밥")을 좋아하는 친구들의 이름을을 배열로 반환하는 함수를 작성하세요.

const friends = [
  { name: "짱구", favoriteFood: "초밥" },
  { name: "철수", favoriteFood: "돈가스" },
  { name: "맹구", favoriteFood: "라면" },
  { name: "유리", favoriteFood: "초밥" },
  { name: "훈이", favoriteFood: "피자" }
];

function findFavoriteFood(friends, food) {


}


const sushiLovers = findFavoriteFood(friends, "초밥");
console.log(sushiLovers);
//[ '짱구', '유리' ]