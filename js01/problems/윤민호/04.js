// 4번째 문제!
// 문제 의도 : 배열의 이해

// 문제 설명
// 아이스 아메리카노는 한잔에 5,500원입니다. 가지고 있는 돈 money가 매개변수로 주어질 때,
// 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < money ≤ 1,000,000

// 입출력 예
// money	result
// 5,500	[1, 0]
// 15,000	[2, 4000]

// 입출력 예 #1
// 5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.

// 입출력 예 #2
// 15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.


let money = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;    /* 현재 가지고 있는 돈 random */
money(1, 1000000) /* 돈 범위 */

function solution(money) {
    let answer = [];
    return answer;
}

solution(money);
