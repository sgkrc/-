import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
const ExhibitonBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const AdminExhibitionItem = (props) => {
  const {
    ART_NUM,
    ART_NAME,
    ART_PICTURE,
    ART_EXPLAIN,
    ART_START,
    ART_END,
    ART_TIME,
    ART_CLOSED,
    ART_PLACE,
    ART_ADDR,
    ART_PRICE,
    ART_CALL,
    ART_SITE,
    ART_ARTIST,
    ART_PREFER,
    ART_BACK,
  } = props;

  return (
    <ExhibitonBlock>
      <div className="thumbnail">
        <img src={ART_PICTURE} alt={ART_NAME} />
        {/* <img src={data:image/png;base64,${ART_PICTURE}} alt={ART_NAME} /> */}
      </div>
      <div className="contents">
        <h2>
          {/* <a rel="noopener noreferrer">{ART_NAME}</a> */}
          <Link to={`/adminexhibitiondetail/${ART_NUM}`}>{ART_NAME}</Link>
        </h2>
        <p>
          전시 기간: {ART_START} - {ART_END}
        </p>
        <p>전시 장소: {ART_PLACE}</p>
        <p>전시 홈페이지 주소: {ART_ADDR}</p>
        <p>
          전시 링크:{" "}
          <a href={ART_SITE} target="_blank" rel="noopener noreferrer">
            {ART_SITE}
          </a>
        </p>
      </div>
    </ExhibitonBlock>
  );
};
export default AdminExhibitionItem;
