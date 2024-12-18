const canvas = document.getElementById("fallingStarsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y += this.speed;
    if (this.y - this.radius > canvas.height) {
      this.y = -this.radius;
      this.x = Math.random() * canvas.width;
    }
  }
}

const stars = [];

function initStars(count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2 + 1;
    const speed = Math.random() * 2 + 1;
    stars.push(new Star(x, y, radius, speed));
  }
}

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.update();
    star.draw();
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  initStars(100);
});

initStars(100);
animate();

/**
 * 수정되는 부분 index 페이지 a태그로 페이지 이동 부분을 javaScript로 변경
 */
const PATH = { intro: "intro/", jsQuiz: "js01/" };
const Ids = {
  최은비: document.getElementById("최은비"),
  민지영: document.getElementById("민지영"),
  박세정: document.getElementById("박세정"),
  김희성: document.getElementById("김희성"),
  윤민호: document.getElementById("윤민호"),
  정한샘: document.getElementById("정한샘"),
  js01: document.getElementById("js01"),
};

/**카드 별 click 이벤트 함수 */

Ids.최은비.addEventListener("click", () => {
  window.open(PATH.intro + "최은비/최은비.html");
});
Ids.민지영.addEventListener("click", () => {
  window.open(PATH.intro + "민지영");
});
Ids.박세정.addEventListener("click", () => {
  window.open(PATH.intro + "박세정/박세정222-1.html");
});
Ids.김희성.addEventListener("click", () => {
  window.open(PATH.intro + "김희성/김희성.html");
});
Ids.윤민호.addEventListener("click", () => {
  window.open(PATH.intro + "윤민호/윤민호.html");
});
Ids.정한샘.addEventListener("click", () => {
  window.open(PATH.intro + "정한샘");
});
Ids.js01.addEventListener("click", () => {
  window.open(PATH.jsQuiz);
});
