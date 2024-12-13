const myNameChage = document.querySelector("#myName");
const myMBTI = document.querySelector("#MBTI-btn");
const selfexprainT = document.querySelector("#self-exprain-text");
const EH = document.querySelector("#exprain-head");
const selfexprainI = document.querySelector("#self-exprain-img");
const song = document.querySelector("#favorite-song");
const movie = document.querySelector("#favorite-movie");
const like = document.querySelector("#favorite-food");
const hatefood = document.querySelector("#hate-food");

myNameChage.addEventListener("click", function(e) {
if (myName.textContent === "김희성") {
  myName.textContent = "金熙成";} else {
    myName.textContent = "김희성";
  }
});

myMBTI.addEventListener("click", function(e) {

  });

  EH.addEventListener("click", function(e) {
    if (EH.textContent === "저는") {
      EH.textContent = "흘러가라 바람이 떠돌듯";} else {
        EH.textContent = "저는";
      }
  });

selfexprainI.addEventListener("click", function(e){
  window.open('https://youtu.be/W5cures6h04?si=Fk5Q9N2016CX43aK');
});

hatefood.addEventListener("click", function(e){
  // window.open('https://youtu.be/rtokOA-hsyQ?si=5zQZZ_5LS7MAoWVt');
});
