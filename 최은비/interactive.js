// 이름 클릭 시 색깔 변경
document.getElementById("name").addEventListener("click", function () {
  const originalColor = getComputedStyle(this).color;
  if (this.style.color === "rgb(135, 206, 235)") {
    this.style.color = originalColor;
  } else {
    this.style.color = "#87ceeb";
  }
});

// "내 정보 자세히 확인" 버튼
document.getElementById("show-more").addEventListener("click", function () {
  const moreInfo = document.getElementById("more-info");
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
});

// 하트 색상 변경
const heart = document.getElementById("heart");
if (heart) {
  heart.addEventListener("mouseover", function () {
    this.textContent = "💙";
  });
  heart.addEventListener("mouseout", function () {
    this.textContent = "🖤";
  });
}


// 스크롤 30px 이상 시 박스 표시
window.addEventListener("scroll", function () {
  const scrollBox = document.getElementById("scroll-box");
  if (scrollBox) {
    scrollBox.style.display = window.scrollY > 30 ? "block" : "none";
  }
});

// 이메일 전송
document.getElementById("email-form").addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 기본 동작 중단

  const subject = document.getElementById("email-subject").value;
  const body = document.getElementById("email-body").value;
  const email = "www.stella.choi@gmail.com";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});

// 제목 길이에 따른 색상 변경
const emailSubjectInput = document.getElementById("email-subject");

emailSubjectInput.addEventListener("input", function () {
    if (this.value.length >= 10) {
        this.style.color = "red";
    } else {
        this.style.color = "black";
    }
});
