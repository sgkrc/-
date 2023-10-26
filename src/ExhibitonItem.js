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
const ExhibitonItem = ({ info }) => {
  const { title, place, artist, art_cnt, informaion } = info;
  return (
    <ExhibitonBlock>
      <div className="thumbnail"></div>
      <div className="contents">
        <h2>
          <a rel="noopener noreferrer">{title}</a>
        </h2>
        <p>{place}</p>
        <p>{artist}</p>
        <p>{art_cnt}</p>
        <p>{informaion}</p>
      </div>
    </ExhibitonBlock>
  );
};
export default ExhibitonItem;
