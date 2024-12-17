//⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣴⣾⣿⣶⣶⣆⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀
//⢀⢀⢀⣀⢀⣤⢀⢀⡀⢀⣿⣿⣿⣿⣷⣿⣿⡇⢀⢀⢀⢀⣤⣀⢀⢀⢀⢀⢀
//⢀⢀ ⣶⢻⣧⣿⣿⠇ ⢸⣿⣿⣿⣷⣿⣿⣿⣷⢀⢀⢀⣾⡟⣿⡷⢀⢀⢀⢀
//⢀⢀⠈⠳⣿⣾⣿⣿⢀⠈⢿⣿⣿⣷⣿⣿⣿⣿⢀⢀⢀⣿⣿⣿⠇⢀⢀⢀⢀
//⢀⢀⢀⢀⢿⣿⣿⣿⣤⡶⠺⣿⣿⣿⣷⣿⣿⣿⢄⣤⣼⣿⣿⡏⢀⢀⢀⢀⢀
//⢀⢀⢀⢀⣼⣿⣿⣿⠟⢀⢀⠹⣿⣿⣿⣷⣿⣿⣎⠙⢿⣿⣿⣷⣤⣀⡀⢀⢀
//⢀⢀⢀ ⢸⣿⣿⣿⡿⢀⢀⣤⣿⣿⣿⣷⣿⣿⣿⣄⠈⢿⣿⣿⣷⣿⣿⣷⡀⢀
//⢀⢀⢀⣿⣿⣿⣿⣷⣀⣀⣠⣿⣿⣿⣿⣷⣿⣷⣿⣿⣷⣾⣿⣿⣿⣷⣿⣿⣿⣆
//⣿⣿⠛⠋⠉⠉⢻⣿⣿⣿⣿⡇⡀⠘⣿⣿⣿⣷⣿⣿⣿⠛⠻⢿⣿⣿⣿⣿⣷⣦
//⣿⣿⣧⡀⠿⠇⣰⣿⡟⠉⠉⢻⡆⠈⠟⠛⣿⣿⣿⣯⡉⢁⣀⣈⣉⣽⣿⣿⣿⣷
//⡿⠛⠛⠒⠚⠛⠉⢻⡇⠘⠃⢸⡇⢀⣤⣾⠋⢉⠻⠏⢹⠁⢤⡀⢉⡟⠉⡙⠏⣹
//⣿⣦⣶⣶⢀⣿⣿⣿⣷⣿⣿⣿⡇⢀⣀⣹⣶⣿⣷⠾⠿⠶⡀⠰⠾⢷⣾⣷⣶⣿
//⣿⣿⣿⣿⣇⣿⣿⣿⣷⣿⣿⣿⣇⣰⣿⣿⣷⣿⣿⣷⣤⣴⣶⣶⣦⣼⣿⣿⣿⣷



const myNameChage = document.querySelector("#myName");
const myMBTIbox = document.querySelector("#MBTI-btn");

const selfexprainT = document.querySelector("#self-exprain-text");
const EH = document.querySelector("#exprain-head");
const selfexprainI = document.querySelector("#self-exprain-img");

const songtitle = document.querySelector("#song-head");
const songwape = document.querySelector("#favorite-song");


const movietitle = document.querySelector("#movie-head");
const moviewape = document.querySelector("#FE-movie");

const FEfoodtitle = document.querySelector("#FEfood-head");
const FEfoodwape = document.querySelector("#FEfood");


const htfoodtitle = document.querySelector("HEfood-head");
const htfoodW = document.querySelector("hate-food");

const gameT = document.querySelector("hobby-head");
const gamew = document.querySelector("#game");



myNameChage.addEventListener("mouseover", function(e) {
  myNameChage.textContent = " 金熙成 ";
});

myNameChage.addEventListener("mouseout", function(e) {
  myNameChage.textContent = " 김희성 ";
});

myMBTIbox.addEventListener("click", function(e) {
  window.open('https://namu.wiki/w/INFJ');
});


EH.addEventListener("mouseover", function(e) {
  EH.textContent = " 고요함 ";
});

EH.addEventListener("mouseout", function(e) {
  EH.textContent = " 저는 ";
});

selfexprainI.addEventListener("click", function(e){
  window.open('https://youtu.be/W5cures6h04?si=Fk5Q9N2016CX43aK');
});
  


songtitle.addEventListener("mouseover", function(e) {
  songtitle.textContent = " 인어이야기 - 백야 ";
});

songtitle.addEventListener("mouseout", function(e) {
  songtitle.textContent = " 좋아하는 노래 ";
});
  
songwape.addEventListener("click", function(e){
 window.open('https://youtu.be/PoRNsq0ePyg?si=xxY_zpyEQRiyChMP');
});



movietitle.addEventListener("mouseover", function(e) {
  movietitle.textContent = " 나우 이즈 굿 ";
});

movietitle.addEventListener("mouseout", function(e) {
  movietitle.textContent = " 좋아하는 영화 ";
});

moviewape.addEventListener("click", function(e){
  window.open('https://www.youtube.com/watch?v=TOCmHJwVtnA');
 });




FEfoodtitle.addEventListener("mouseover", function(e) {
    FEfoodtitle.textContent = " 고기 ";
  });

FEfoodtitle.addEventListener("mouseout", function(e) {
     FEfoodtitle.textContent = "좋아하는 음식";
 });

 FEfoodwape.addEventListener("click", function(e){
  window.open('https://youtu.be/U6hsh6l7cPE?si=O3G1JDsk9KdDWagR');
 });


//  hatefoodtitle.addEventListener("mouseover", function(e) {
//   hatefoodtitle.textContent = " 해산물이 들어간 국/찌개/탕 , 가지 ";
// });

// hatefoodtitle.foodtitle.addEventListener("mouseout", function(e) {
//   hatefoodtitle.textContent = "싫어하는 음식";
// });

// hatefoodW.addEventListener("click", function(e){
//   window.open('https://youtu.be/rtokOA-hsyQ?si=5zQZZ_5LS7MAoWVt');
// });

// htfoodW.addEventListener("click", function(e){
//  window.open('https://youtu.be/rtokOA-hsyQ?si=0jJq4fVirpdDN8uP');
// });

// gameT.addEventListener("mouseover", function(e) {
//   gameT.textContent = " 게임 ";
// });

// gameT.addEventListener("mouseout", function(e) {
//   gameT.textContent = " 취미 ";
// });

gamew.addEventListener("click", function(e){
  window.open('https://lostark.game.onstove.com/Main');
});



const canvas = document.getElementById('fallingStarsCanvas');
const ctx = canvas.getContext('2d');

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
        ctx.fillStyle = 'white';
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
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.update();
        star.draw();
    }

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    initStars(100);
});

initStars(100);
animate();