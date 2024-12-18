function findFavoriteFood(friends, food) {
  const result = []; 

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].favoriteFood === food) { // 특정 음식을 좋아하는 경우
      result.push(friends[i].name); // 이름을 결과 배열에 추가
    }
  }

  return result; 
}
