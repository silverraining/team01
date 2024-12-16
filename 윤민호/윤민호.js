const NameBox = document.querySelector("#name-txt");
const TextHiden = document.querySelector("#name-hiden");
let NameClickOX = 1;
const MbtiBox = document.querySelector("#mbti-txt");
const MbtiHiden = document.querySelector("#mbti-hiden");
let MbtiClickOX = 1;
const SingBox = document.querySelector("#sing-txt");
const SingHiden = document.querySelector("#sing-hiden");
let SingClickOX = 1;
const MovieBox = document.querySelector("#movie-txt");
const MovieHiden = document.querySelector("#movie-hiden");
let MovieClickOX = 1;
const FoodBox = document.querySelector("#food-txt");
const FoodHiden = document.querySelector("#food-hiden");
let FoodClickOX = 1;
const HomeBox = document.querySelector("#home-txt");
const HomeHiden = document.querySelector("#home-hiden");
let HomeClickOX = 1;
const BirthdayBox = document.querySelector("#birthday-txt");
const BirthdayHiden = document.querySelector("#birthday-hiden");
let BirthdayClickOX = 1;


NameBox.addEventListener("click", function (e) {
    TextHiden.style.display = 'block';
    NameBox.classList.add('name-txt-hide')
    NameClickOX = 0;
});

NameBox.addEventListener("mouseover", function (e) {
    NameBox.classList.add('name-txt-hide')
    NameBox.style.cursor = 'pointer'
});


NameBox.addEventListener("mouseout", function (e) {
    if(NameClickOX){
        NameBox.classList.remove('name-txt-hide')
        NameBox.style.removeProperty('cursor')
    }
});    




MbtiBox.addEventListener("click", function (e) {
    MbtiHiden.style.display = 'block';
    MbtiBox.classList.add('name-txt-hide')
    MbtiClickOX = 0;
});

MbtiBox.addEventListener("mouseover", function (e) {
    MbtiBox.classList.add('name-txt-hide')
    MbtiBox.style.cursor = 'pointer'
});


MbtiBox.addEventListener("mouseout", function (e) {
    if(MbtiClickOX){
        MbtiBox.classList.remove('name-txt-hide')
        MbtiBox.style.removeProperty('cursor')
    }
});    


SingBox.addEventListener("click", function (e) {
    SingHiden.style.display = 'block';
    SingBox.classList.add('name-txt-hide')
    SingClickOX = 0;
});

SingBox.addEventListener("mouseover", function (e) {
    SingBox.classList.add('name-txt-hide')
    SingBox.style.cursor = 'pointer'
});


SingBox.addEventListener("mouseout", function (e) {
    if(SingClickOX){
        SingBox.classList.remove('name-txt-hide')
        SingBox.style.removeProperty('cursor')
    }
});    


MovieBox.addEventListener("click", function (e) {
    MovieHiden.style.display = 'block';
    MovieBox.classList.add('name-txt-hide')
    MovieClickOX = 0;
});

MovieBox.addEventListener("mouseover", function (e) {
    MovieBox.classList.add('name-txt-hide')
    MovieBox.style.cursor = 'pointer'
});


MovieBox.addEventListener("mouseout", function (e) {
    if(MovieClickOX){
        MovieBox.classList.remove('name-txt-hide')
        MovieBox.style.removeProperty('cursor')
    }
});    


FoodBox.addEventListener("click", function (e) {
    FoodHiden.style.display = 'block';
    FoodBox.classList.add('name-txt-hide')
    FoodClickOX = 0;
});

FoodBox.addEventListener("mouseover", function (e) {
    FoodBox.classList.add('name-txt-hide')
    FoodBox.style.cursor = 'pointer'
});


FoodBox.addEventListener("mouseout", function (e) {
    if(FoodClickOX){
        FoodBox.classList.remove('name-txt-hide')
        FoodBox.style.removeProperty('cursor')
    }
});    


HomeBox.addEventListener("click", function (e) {
    HomeHiden.style.display = 'block';
    HomeBox.classList.add('name-txt-hide')
    HomeClickOX = 0;
});

HomeBox.addEventListener("mouseover", function (e) {
    HomeBox.classList.add('name-txt-hide')
    HomeBox.style.cursor = 'pointer'
});


HomeBox.addEventListener("mouseout", function (e) {
    if(HomeClickOX){
        HomeBox.classList.remove('name-txt-hide')
        HomeBox.style.removeProperty('cursor')
    }
});    


BirthdayBox.addEventListener("click", function (e) {
    BirthdayHiden.style.display = 'block';
    BirthdayBox.classList.add('name-txt-hide')
    BirthdayClickOX = 0;
});

BirthdayBox.addEventListener("mouseover", function (e) {
    BirthdayBox.classList.add('name-txt-hide')
    BirthdayBox.style.cursor = 'pointer'
});


BirthdayBox.addEventListener("mouseout", function (e) {
    if(BirthdayClickOX){
        BirthdayBox.classList.remove('name-txt-hide')
        BirthdayBox.style.removeProperty('cursor')
        console.log('제대로 작동');
    }
});    



for (let i = 0; i < 200; i++) {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.opacity = Math.random(); // 무작위 투명도
  const startX = Math.random() * 100; // 시작 X 좌표 무작위
  const endX = startX + (Math.random() * 20 - 10); // 종료 X 좌표 무작위
  const scale = Math.max(Math.random(), 0.2); // 무작위 크기
  const keyframe = [
    { transform: `translate(${startX}vw, 0) scale(${scale})` },
    { transform: `translate(${endX}vw, 1300px) scale(${scale})` },
  ];
  const option = {
    duration: 15000 + Math.random() * 5000, // 무작위 지속 시간
    easing: "linear",
    iterations: Infinity,
    delay: -Math.random() * 20 * 1000, // 무작위 지연 시간
  };
  snow.animate(keyframe, option);
  document.body.appendChild(snow);
}

