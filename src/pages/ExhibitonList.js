import React, { useState } from "react";
import axios from "axios";
import ExhibitonItem from "../ExhibitonItem";
import ListGroup from "react-bootstrap/ListGroup";
const sample = {
  title: "전시회 명",
  place: "서울시립미술관",
  artist: "아티스트",
  art_cnt: "전시회 작품 수",
  informaion:
    "open api 정보를 호출해서 적용하기. 형식은 xml이다. 꼭 주의!!!!!!!!!",
};
const ExhibitonList = () => {
  const [data, setData] = useState(null);
  // const serviceKey = "636f716649676b733637714f775a68"; // 서비스 키
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://openapi.seoul.go.kr:8088/636f716649676b733637714f775a68/xml/ListExhibitionOfSeoulMOAInfo/1/1/"
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>전시회 조회</h1>
      <button onClick={onClick}>버튼 누르세요</button>
      {data && (
        <div>
          <h2>API 응답 데이터:</h2>
          <pre>{data}</pre>
        </div>
      )}

      <ListGroup as="ul">
        <ListGroup.Item as="li">
          <ExhibitonItem info={sample} />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <ExhibitonItem info={sample} />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <ExhibitonItem info={sample} />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <ExhibitonItem info={sample} />
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <ExhibitonItem info={sample} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ExhibitonList;
