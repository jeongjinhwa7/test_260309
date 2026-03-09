import axios from "axios";

function Post() {
  async function fetchPosts() {
    // 조건? 참값 : 거짓값 - 조건을 만족하면
    // 참값 만족하지 않으면 거짓 값

    // process.env.NODE_ENV === "production"  build 진행 시에는
    // process.env.NODE_ENV 값이 production으로 설정
    // npm run start 실행 시에는 process.env.NODE_ENV development
    const SERVER_URL =
      process.env.NODE_ENV === "production" ? "/py" : "http://localhost:5000";
    console.log(`${SERVER_URL}/posts`);
    const res = await axios.get(
      // 요청할 백엔드 IP 및 주소
      // "http://192.168.0.26:5000/posts",
      // "http://localhost:80/py/posts",

      // "http:localhost:5000/posts"); //내가 백엔드일 때 이 주소로 입력 원래 주소는 이 코드만 있었음
      //프론트엔드에서 이용을 위해 요청할 백엔드 IP 및 주소(백엔드 주소를 이런 식으로 하고)
      //"http://192.168.0.26:5000/posts",
      //만일 상대방 백엔드 주소가 있는 경우라면 아이피+브라우저 주소 이렇게 순으로 입력

      //"http://localhost:80/py/posts",
      // JavaScript 작성하는 공간
      `${SERVER_URL}/posts`,
    );

    console.log(res);
  }
  fetchPosts();
  const sample = [
    { id: 1, title: "react 연습", content: "내용" },
    { id: 2, title: "backend 연습", content: "내용" },
    { id: 3, title: "db 연습", content: "내용" },
  ];
  return (
    <>
      {/* HTML 작성하는 공간 */}
      <ul>
        {/* item은 상단 자바스크립트 공간에 있는 sample 배열 내 각각의 “하나의 요소(객체)”를 뜻함 */}
        {sample.map((item) => (
          // sample은 배열 전체이고, map 함수는 이 배열 안의 각 객체를 하나씩 순회하며 item 변수에 현재 처리 중인 객체 하나를 할당합니다. 따라서:

          // sample = 배열 전체 (3개의 객체가 들어 있음)
          // item = sample 배열의 한 요소 (예: { id: 1, title: "react 연습", content: "내용" } 중 하나)
          // 그래서 item.title처럼 item 객체의 속성에 접근하여 JSX로 출력
          //  이 공간에서 자바스크립트 사용하려면 중괄호 써야 함
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
// posts 라는 이름으로 라우트에 추가(19분)
export default Post;
