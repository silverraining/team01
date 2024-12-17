function filterChecklist(list, status) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
      if (status === "completed" && list[i].completed) {
          result.push(list[i]);
      } else if (status === "incomplete" && !list[i].completed) {
          result.push(list[i]);
      }
  }
  return result;
}

const checklist = [
  { id: 1, task: "Do homework", completed: true },
  { id: 2, task: "Wash dishes", completed: false },
  { id: 3, task: "Clean room", completed: true },
  { id: 4, task: "Buy groceries", completed: false }
];

console.log(filterChecklist(checklist, "completed"));
console.log(filterChecklist(checklist, "incomplete"));
