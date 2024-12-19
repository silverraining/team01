//(1) import 하기
import { 정한샘 } from "./data/정한샘.js";
import { 최은비 } from "./data/최은비.js";
import { 민지영 } from "./data/민지영.js";
import { 윤민호 } from "./data/윤민호.js";
import { 박세정 } from "./data/박세정.js";
import { 김희성 } from "./data/김희성.js";

const dataset = [];

//(2) data 추가하기
dataset.push(...정한샘);
dataset.push(...최은비);
dataset.push(...민지영);
dataset.push(...윤민호);
dataset.push(...박세정);
dataset.push(...김희성);

const note = document.querySelector(".wrapper");
let notes = "";

for (const data of dataset) {
  let container = `<div class="note-container">
      <div class="section">
        <p><strong>담당자:</strong> ${data.name}</p>
        <p><strong>대상 팀:</strong> ${data.target}</p>
        <p><strong>작업 제목:</strong> ${data.title}</p>
      </div>
      <div class="section">
        <div class="section-title">리팩토링 내용</div>`;
  for (const refactor of data.refactors) {
    container += `<div class="highlight">
            <p><strong>Pull Request 링크:</strong> 
                <a class="pr-link" href="${refactor.prLink}" target="_blank">PR #${refactor.prNumber}</a>
            </p>
        </div>`;
    for (const detail of refactor.details) {
      container += `<div class="details">
            <p><strong>수정 사항:</strong> ${detail.detail}</p>
            <p><strong>의도:</strong> ${detail.intention}</p>
        </div>`;
    }
    container += `</div>`;
  }
  container += `</div>`;
  console.log(container);
  notes += container;
}

note.innerHTML = notes;
