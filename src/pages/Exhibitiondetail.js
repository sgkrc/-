import React, { useState, useEffect } from "react";
import "./detail.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Exhibitiondetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [exhibitionData, setExhibitionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/Exhibitiondetail/${id}` // Use the 'id' parameter in the URL
        );

        setExhibitionData(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [id]);

  if (!exhibitionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contents">
      <div className="product_detail">
        <div className="detailArea">
          <div className="imgArea">
            <img
              src={exhibitionData.ART_PICTURE}
              className="product_img"
              alt="Exhibition Image"
            />
          </div>
          <div className="infoArea">
            <div className="headingArea">
              <h2> {exhibitionData.ART_NAME}</h2>
              <p className="summary">
                {exhibitionData.summary}
                <span className="ev">
                  <Button href="/Rating">평가하기</Button>
                </span>
              </p>
            </div>
            <table>
              <tr className="space">
                <th className="t_row">
                  <span>일정</span>
                </th>
                <td>
                  <span>{exhibitionData.date}</span>
                </td>
              </tr>

              <tr className="space">
                <th>
                  <span className="t_row">장소</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_PLACE}</span>
                </td>
              </tr>

              <tr className="space">
                <th>
                  <span className="t_row">전시시간</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_TIME}</span>
                </td>
              </tr>

              <tr className="space">
                <th>
                  <span className="t_row">전시가격</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_PRICE}</span>
                </td>
              </tr>

              <tr className="space">
                <th>
                  <span className="t_row">주소</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_ADDR}</span>
                </td>
              </tr>

              <tr className="space">
                <th>
                  <span className="t_row">전시 사이트</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_SITE}</span>
                </td>
              </tr>
              <tr className="space">
                <th className="t_row">
                  <span>전시 설명</span>
                </th>
                <td>
                  <span>{exhibitionData.ART_EXPLAIN}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitiondetail;