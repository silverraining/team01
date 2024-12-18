export const 최은비 = [];

최은비.push({
  name: "최은비",
  target: "3팀",
  title: "Refactor/최은비→김민희 #48",
  refactors: [
    {
      prLink: "https://github.com/BBong99/team3/pull/48",
      prNumber: 48,
      details: [
        {
          detail:  `<br>
          1. grid-template → grid-template-columns 옵션으로 변경<br>
          2. 링크가 연결된 글씨에 hover를 추가
        `,
          intention:  `<br>
          1. grid-template-columns 옵션으로 열만 설정하면 되서 가독성 향상<br>
          2. 링크가 연결됨을 마우스 hover를 통해 다른 요소들과 구분
        `   
        },
      ]
    }
  ]
});

최은비.push({
  name: "최은비",
  target: "2팀",
  title: "Refactor/최은비→김조순 #76",
  refactors: [
    {
      prLink: "https://github.com/Ripponcheese/FS-05-team2/pull/76",
      prNumber: 76,
      details: [
        {
          detail:  `<br>
          1. fav-music 클래스 생성하여 노래 제목에 링크 삽입<br>
          2. movie-container 클래스 생성해서 영화 티저 영상 삽입
        `,
          intention:  `<br>
          좋아하는 음악과 영화를 링크나 영상으로 공유하면 좋을 것 같아서
        `   
        },
      ]
    }
  ]
});

최은비.push({
  name: "최은비",
  target: "2팀",
  title: "Refactor/최은비→정하윤 #79",
  refactors: [
    {
      prLink: "https://github.com/Ripponcheese/FS-05-team2/pull/79",
      prNumber: 79,
      details: [
        {
          detail:  `<br>
          1. css 파일에서 alert를 띄우는 편지모양 아이콘 버튼과 좋아하는 노래 제목에 마우스 커서 포인터 설정<br>
          2. 노래 제목 클릭해도 링크로 넘어가도록 HTML 파일 내 div 위치 수정하고 fav-music 클래스 생성하여 css파일에서 커서 포인터 옵션 설정<br>
          3. 페이지 내 마우스 우클릭 시 alert 창에 뜨는 문구 "좌클릭 금지"-> "우클릭 금지"로 문구 변경<br>
        `,
          intention:  `<br>
          1. 클릭시 alert나 링크 연동이 되어있는 요소에 마우스 포인터를 통해 다른 요소들과 구분<br>
          2. 노래 제목도 클릭시 링크로 연결되면 좋을것 같아서
        `   
        },
      ]
    }
  ]
});