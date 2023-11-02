import styled from "styled-components";
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
const ExhibitonItem = (props) => {
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
          {ART_NAME}
        </h2>
        <p>전시 번호: {ART_NUM}</p>
        <p>
          전시 기간: {ART_START} - {ART_END}
        </p>
        <p>전시 장소: {ART_PLACE}</p>
        <p>전시 설명: {ART_EXPLAIN}</p>
        <p>전시 관람 시간: {ART_TIME}</p>
        <p>전시 휴관일: {ART_CLOSED}</p>
        <p>전시 홈페이지 주소: {ART_ADDR}</p>
        <p>전시 가격: {ART_PRICE}</p>
        <p>전시 전화번호: {ART_CALL}</p>
        <p>
          전시 링크:{" "}
          <a href={ART_SITE} target="_blank" rel="noopener noreferrer">
            {ART_SITE}
          </a>
        </p>
        <p>전시 작가: {ART_ARTIST}</p>
        <p>전시 장르: {ART_PREFER}</p>
        <p>전시 배경지식</p>
        <div
          dangerouslySetInnerHTML={{ __html: ART_BACK }} // HTML을 렌더링
        />
      </div>
    </ExhibitonBlock>
  );
};
export default ExhibitonItem;
