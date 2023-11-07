import client from "./client";

// 모든 전시회 출력
export const allList = () => client.get("/allexhibitions");

//각 전시회 id 로 호출
export const detail = ({ id }) => client.get(`/exhibitiondetail/${id}`);

// 전시회 검색
export const search = (query) =>
  client.get(`/ExhibitionSearchList?query=${query}`);
