export const 박세정 = [];

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

박세정.push({
  name: "박세정",
  target: "2팀",
  title: "refactor/박세정→최수빈 #75",
  refactors: [
    {
      prLink: "https://github.com/Ripponcheese/FS-05-team2/pull/75",
      prNumber: 75,
      details: [
        {
          detail: "content_box에 잡혀있던 margin 삭제",
          intention: "화면 상으로 봤을 때 중앙정렬 맞춤."   
        },
      ]
    }
  ]
});

박세정.push({
  name: "박세정",
  target: "3팀",
  title: "Refactor/박세정→유호은 #41",
  refactors: [
    {
      prLink: "https://github.com/BBong99/team3/pull/41",
      prNumber: 41,
      details: [
        {
          detail: "이미지 링크 수정",
          intention: "파일을 찾을 수 없는 이미지가 있어 경로 재설정함."
        },
        { 
          detail: "사이즈 미지정 width 주석처리",
          intention: "vscode 상 width 미지정으로 빨간줄이 있어 주석처리하여 없앰."   
        } 
      ]
    }
  ]
});
