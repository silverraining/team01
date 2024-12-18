export const 민지영 = [];

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

민지영.push({
  name: "민지영",
  target: "2팀",
  title: "Refactor/민지영→신진호",
  refactors: [
    {
      prLink: "https://github.com/Ripponcheese/FS-05-team2/pull/78",
      prNumber: 78,
      details: [
        {
          detail: "전체 화면시 grid의 overflow를 max-width로 해결",
          intention: "전체화면시 grid가 부모 객체를 overflow하여 아쉬움",
        },
        {
          detail: "display 관련하여 리팩토링, hidden visible class 추가",
          intention:
            "style의 display부분을 관리하여 JS에서 중복 코드 처리 필요",
        },
        {
          detail: "acbutton 선택자가 달라서 html의 class선택자로 다시 선언",
          intention: `html에서는 class="acbutton"이고 JS에서는 #acbutton으로 DOM을 불러와서 class 선택자로 통일 필요`,
        },
      ],
    },
  ],
});

민지영.push({
  name: "민지영",
  target: "3팀",
  title: "Refactor/민지영→가승연",
  refactors: [
    {
      prLink: "https://github.com/BBong99/team3/pull/42",
      prNumber: 42,
      details: [
        {
          detail:
            "display 관련하여 리팩토링, CSS에서는 hidden visible class 추가, JS에서는 visible 클래스명 토글 함수 추가",
          intention:
            "style의 display부분을 관리하여 JS에서 중복 코드 처리 필요",
        },
        {
          detail: "이벤트 처리할 객체 cursor style 추가",
          intention: "클릭이 가능하다는 의도 추가",
        },
        {
          detail: "프로필 이외에는 hover가 아닌 click으로 수정",
          intention:
            "맨마지막 tmi hover시 이벤트 작동이 부자연스러움 버벅임 현상이 있어 해결 필요",
        },
      ],
    },
  ],
});
