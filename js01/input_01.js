const members = ["김희성", "민지영", "박세정", "윤민호", "정한샘", "최은비"];
const numbers = ["01", "02", "03", "04", "05"];

const problemFiles = [];
const solutionFiles = [];

for (const member of members) {
  for (const number of numbers) {
    problemFiles.push(`problems/${member}/${number}.js`);
    solutionFiles.push(`solutions/${member}/${number}.js`);
  }
}
// console.log(problemFiles);

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const iframeContext = document.querySelector("iframe");

btnLeft.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.classList.remove(String(page));
  page -= 1;
  page = Math.max(0, page);
  iframeContext.classList.add(String(page));
  iframeContext.src = problemFiles[page];
});

btnRight.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.classList.remove(String(page));
  page += 1;
  page = Math.min(problemFiles.length - 1, page);
  iframeContext.classList.add(String(page));
  iframeContext.src = problemFiles[page];
});

const btnPro = document.querySelector(".pro");
btnPro.addEventListener("click", () => {
  let page = Number(iframeContext.className);
  iframeContext.src = problemFiles[page];
});
