//회원 인증에 필요한 api
import client from "./client";

// 로그인
export const login = ({ username, password }) =>
  client.post("/LogIn", { username, password });

// 회원가입
//post로 백엔드 서버의 /users로 보낸다는 것 ->서버에 따라 이부분을 변경
export const register = ({ username, password, name, email }) =>
  client.post("/Register", { username, password, name, email });

// 로그인 상태 확인
export const check = () => client.get("/Welcome");

// 회원가입 상태 확인
export const register_check = () => client.get("/SignUpComplete");

// 로그아웃
export const logout = () => client.post("/Logout");

//아이디 찾기
export const findID = ({ name, email }) =>
  client.post("/FindID", { name, email });

//비밀번호 찾기
export const findPW = ({ username, email }) =>
  client.post("/FindPW", { username, email });
