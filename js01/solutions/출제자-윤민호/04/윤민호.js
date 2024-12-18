let money = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;    /* 현재 가지고 있는 돈 random */

function solution(money) {
    let answer1 = Math.floor(money / 5500)
    let answer2 = money % 5500
    let answer = [answer1, answer2];
    console.log(`${money}원은 아이스 아메리카노 ${answer1} 잔을 살 수 있고 잔돈은${answer2}원입니다.`);
}

solution(money(1, 1000000));