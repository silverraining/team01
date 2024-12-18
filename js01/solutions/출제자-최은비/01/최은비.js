const team01 = ["은비", "지영", "한샘", "희성", "민호", "태진"];

//방법1
//마지막 요소 교체
team01[team01.length - 1] = "세정";

console.log("최강 1팀: " + team01.join(", "));


//방법2
//마지막 요소 삭제 후 push
team01.pop(); 
team01.push("세정");

console.log("최강 1팀: " + team01.join(", "));

