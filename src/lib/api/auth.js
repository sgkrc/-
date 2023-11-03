//회원 인증에 필요한 api
import client from "./client";

// 로그인
export const login = ({ username, password }) =>
  client.post("/LogIn", { username, password });
<<<<<<< HEAD
=======

>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
// 회원가입
//post로 백엔드 서버의 /users로 보낸다는 것 ->서버에 따라 이부분을 변경
export const register = ({ username, password, name, email }) =>
  client.post("/Register", { username, password, name, email });

// 로그인 상태 확인
export const check = () => client.get("/Welcome");

<<<<<<< HEAD
/*
export const check = (username) =>
  client.get(
    "/Welcome",
    {
      params: {
        //params 값으로 전달
        username: username, // 사용자명 대신 실제 아이디 또는 사용자명 입력
      },
    },
    { withCredentials: true }
  );
*/
// 회원가입 상태 확인
//export const register_check = () => client.get("/SignUpComplete");
=======
// 회원가입 상태 확인
export const register_check = () => client.get("/SignUpComplete");
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed

// 로그아웃
export const logout = () => client.post("/Logout");

//아이디 찾기
export const findID = ({ name, email }) =>
  client.post("/FindID", { name, email });

//비밀번호 찾기
export const findPW = ({ username, email }) =>
  client.post("/FindPW", { username, email });
<<<<<<< HEAD

//마이페이지 정보 조회
export const mypage = () => client.get("/mypage");

//정보 수정
export const updateMy = ({ name, email, newPassword }) =>
  client.post("/updateMy", { name, email, newPassword });

//회원 탈퇴
export const deleteAccount = ({ username }) =>
  client.delete("/deleteAccount", { username });
=======
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
