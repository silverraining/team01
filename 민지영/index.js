document.addEventListener("mousemove", parallax);

function parallax(event) {
  const centerX = window.innerWidth / 2; // 화면 중심 X 좌표
  const centerY = 300; // 화면 중심 Y 좌표

  this.querySelectorAll(".parallax-wrap .component").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = ((event.pageX - centerX) * position) / 90;
    const y = ((event.pageY - centerY) * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
// js
