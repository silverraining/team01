출제 의도: 객체 배열, 조건문

체크리스트를 관리하기 위한 filterChecklist라는 함수를 작성하세요. 이 함수는 체크리스트 객체 배열과 필터 조건을 입력받아 조건에 맞는 항목만 반환합니다.

입력값
id (숫자): 항목의 고유 ID
task (문자열): 작업 이름
completed (불리언): 완료 여부

조건
"completed": 완료된 항목만 반환
"incomplete": 완료되지 않은 항목만 반환




const checklist = [
  { id: 1, task: "Do homework", completed: true },
  { id: 2, task: "Wash dishes", completed: false },
  { id: 3, task: "Clean room", completed: true },
  { id: 4, task: "Buy groceries", completed: false }
];

function filterChecklist(list, status) {
  // 여기에 코드를 작성하세요.
}

// 테스트 코드
console.log(filterChecklist(checklist, "completed"));
// 출력: [{ id: 1, task: "Do homework", completed: true }, { id: 3, task: "Clean room", completed: true }]

console.log(filterChecklist(checklist, "incomplete"));
// 출력: [{ id: 2, task: "Wash dishes", completed: false }, { id: 4, task: "Buy groceries", completed: false }]
