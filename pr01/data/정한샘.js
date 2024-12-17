export const 정한샘 = [];

// {
//   name: "",    //수정자
//   target: "",  //대상 팀 (2팀/3팀)
//   title: "",   //제목
//   refactors: [
//     {
//       prLink: "",  //PR link
//       prNumber: ,
//       details: [
//         {
//           detail: "",   //수정 내용
//           intention: "" //의도
//         }
//       ]
//     },
//   ]
// }

정한샘.push({
  name: "정한샘",
  target: "2팀",
  title: "문제지.html, 문제지.css 리팩토링",
  refactors: [
    {
      prLink: "https://github.com/Ripponcheese/FS-05-team2/pull/73",
      prNumber: 73,
      details: [
        {
          detail: "xmp 태그를 pre code 태그로 수정",
          intention: "xmp 태그는 HTML5에서 더 이상 권장되지 않으며 deprecated 상태이므로, 이를 대체할 방법이 필요함."   
        },
      ]
    }
  ]
});

정한샘.push({
  name: "정한샘",
  target: "3팀",
  title: "김민희/script.js 리팩토링",
  refactors: [
    {
      prLink: "https://github.com/BBong99/team3/pull/49",
      prNumber: 49,
      details: [
        {
          detail: "if else 조건문을 삼항연산자로 수정",
          intention: "삼항연산자를 활용해서 가독성 향상"   
        } 
      ]
    }
  ]
});
