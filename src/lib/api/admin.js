//회원 인증에 필요한 api
import client from "./client";

//정보 수정
export const update = ({ username, name, email, newPassword }) =>
  client.post("/admin/update", { username, name, email, newPassword });

//회원 탈퇴
export const deleteUser = (username) =>
  client.delete(`/admin/deleteUser/${username}`);
