const members = ["김희성", "민지영", "박세정", "윤민호", "정한샘", "최은비"];
const numbers = ["01", "02", "03", "04", "05"];

let idx = 1;
const MIN_PAGE_NUMBER = members.length * numbers.length - 1;
/*
{
	id: 1,
	name: 이름,
	problems: [
	  {
	    title: 제목,
	    url: 문제 파일경로,
      solutions: [
        파일경로 1,
        파일경로 2,
        ..
      ]
	  },
	]
}
*/

// const js01 = [];
const problems = [];

for (const member of members) {
  for (const number of numbers) {
    const problemFile = `problems/${member}/${number}.js`;
    const solutionFiles = [];
    for (const mem of members) {
      solutionFiles.push(`solutions/출제자-${member}/${number}/${mem}.js`);
    }
    problems.push({
      title: `${member}의 ${number}번째 문제:`,
      url: problemFile,
      solutions: solutionFiles 
    })
  }
  // js01.push({
  //   id: idx,
  //   name: member,
  //   problems: problems
  // });
  idx += 1;
}

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const iframeContext = document.querySelector("iframe");
const btnSolutions = document.querySelectorAll(".solution");
const title = document.querySelector(".title");
const btns = document.querySelectorAll(".solutions > button");

btnLeft.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.classList.remove(String(page));
  page -= 1;
  page = Math.max(0, page);
  iframeContext.classList.add(String(page));
  iframeContext.src = problems[page].url;
  title.textContent = problems[page].title;

  btns.forEach((i) => i.classList.remove("button-action"));
  btns[0].classList.add("button-action");
});

btnRight.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.classList.remove(String(page));
  page += 1;
  page = Math.min(MIN_PAGE_NUMBER, page);
  iframeContext.classList.add(String(page));
  iframeContext.src = problems[page].url;
  title.textContent = problems[page].title;

  btns.forEach((i) => i.classList.remove("button-action"));
  btns[0].classList.add("button-action");
});

const btnPro = document.querySelector(".pro");
btnPro.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.src = problems[page].url;
});

btnSolutions.forEach((item) => {
  item.addEventListener("click", (e) => {
    const page = Number(iframeContext.className);
    const num = Number(e.target.dataset.id);
    const url = problems[page].solutions[num];
    iframeContext.src = url;
  });
});

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    btns.forEach((i) => i.classList.remove("button-action"));
    item.classList.add("button-action");
  });
});