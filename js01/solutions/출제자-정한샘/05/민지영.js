const checklist = [
  { id: 1, task: "Do homework", completed: true },
  { id: 2, task: "Wash dishes", completed: false },
  { id: 3, task: "Clean room", completed: true },
  { id: 4, task: "Buy groceries", completed: false },
];

function filterChecklist(list, status) {
  const result = [];
  const isCompleted = status === "completed" ? true : false;

  for (let item of list) {
    if (item.completed === isCompleted) {
      result.push(item);
    }
  }

  return result;
}

// 테스트 코드
console.log(filterChecklist(checklist, "completed"));
// 출력: [{ id: 1, task: "Do homework", completed: true }, { id: 3, task: "Clean room", completed: true }]

console.log(filterChecklist(checklist, "incomplete"));
// 출력: [{ id: 2, task: "Wash dishes", completed: false }, { id: 4, task: "Buy groceries", completed: false }]
