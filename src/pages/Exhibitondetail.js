import React from "react";
import "./detail.css";
import { Button } from "react-bootstrap";
const sample = {
  title: "CAT ART",
  image: "/images/cat.jpg",
  summary: "고양이 미술사",
  place: "MUSEUM 209 : 서울 송파구 잠실로 209 소피텔 건물 3층",
  date: "2022.07.06. ~ 2023.10.29",
  closed: "매월 첫째 주 월요일",
  price: "성인 : 15000원 청소년 : 12000원",
  artist: "야마모토 슈",
  art_cnt: "전시회 작품 수",
  informaion:
    "누구나 한번쯤 봤을 법한 명화 속 주인공이 된 고양이 작품들을 통해 고대 미술부터 르네상스, 바로크, 인상주의를 거쳐 20세기 근현대 미술에 이르기까지 전체 미술사를 관통하는 전시",
};
const Exhibitondetail = ({ data }) => {
  data = sample;
  return (
    <div class="contents">
      <div class="product_detail">
        <div class="detailArea">
          <div class="imgArea">
            <img src={data.image} className="product_img" />
          </div>
          <div class="infoArea">
            <div class="headingArea">
              <h2>전시회 제목:{data.title}</h2>
              <p class="summary ">
                {data.summary}
                <span class="ev">
                  <Button href="/Rating">평가하기</Button>
                </span>
              </p>
            </div>
            <table>
              <tr class="space">
                <th class="t_row">
                  <span>일정</span>
                </th>
                <td>
                  <span>{data.date}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">휴관일</span>
                </th>
                <td>
                  <span>{data.closed}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">장소</span>
                </th>
                <td>
                  <span>{data.place}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">관람료</span>
                </th>
                <td>
                  <span>{data.price}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">전시 작가</span>
                </th>
                <td>
                  <span>{data.artist}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">전시 내용</span>
                </th>
                <td>
                  <span>{data.informaion}</span>
                </td>
              </tr>

              <tr class="space">
                <th>
                  <span class="t_row">전시 배경지식</span>
                </th>
                <td>
                  <span>
                    일본계 야마모토 슈는 2007년부터 16년동안 누구나 한번쯤 봤을
                    법한 명화 속 주인공을 고양이로 대체하는 작업을 하고 있다.
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitondetail;
