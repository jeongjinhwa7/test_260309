const express = require("express");

const app = express();
app.use(express.json());
//CORS 작성 예정
app.use(
  //백엔드에 적는 cors 내용은
  cors({
    origin: [
      //백엔드에서 요청할 프론트엔드 주소와 그 앞에 아이피 입력
      "http://localhost:3000", //원래 내 컴퓨터는 이 주소이고 내가 프론트엔드라면 백엔드에서 이 주소
      //내가 프론트엔드가 아니라면 이 주소가 필요없음
      //허용시킬 서비스(frontend)의 주소
      //상대방의 forntend IP
      "http://192.168.0.32:3000",
      "http://192.168.0.32:3000",
      // 여러 사람이 될 수도 있으니 여러 개 주소 입력 가능
      // 아이피+주소 순(내가 프론트엔드면 http://localhost:3000만 입력)
    ],
    // 프론트 엔드는 내 컴퓨터로
    // origin: "*", //개발할 때만 여러 팀원이 하니까
    credentials: true,
  }),
);

app.get("/posts", (req, res) => {
  const sample = [
    { id: 1, title: "react 연습", content: "내용" },
    { id: 2, title: "backend 연습", content: "내용" },
    { id: 3, title: "db 연습", content: "내용" },
  ];
  return res.status(200).json({
    message: "데이터 가져오기 성공",
    data: sample,
  });
});

app.listen(5000, () => {
  console.log("백엔드 5000포트 실행중");
});
