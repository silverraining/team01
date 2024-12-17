function solution(money) {
    let answer1 = Math.floor(money / 5500)
    let answer2 = money % 5500
    let answer = [answer1, answer2];
    return answer;
}