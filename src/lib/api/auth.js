//회원 인증에 필요한 api
import client from "./client";

// 로그인
export const login = ({ id, password }) =>
  client.post("/users", { id, password });

// 회원가입
export const register = ({ id, password, name, email }) =>
  client.post("/users", { id, password, name, email });

// 로그인 상태 확인
export const check = () => client.get("/users");

// 로그아웃
export const logout = () => client.post("/users");
