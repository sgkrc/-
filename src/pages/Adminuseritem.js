import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
const userBlock = styled.div`
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
const Adminuseritem = (props) => {
  const { id, user_id, user_name, user_mail, user_pw } = props;

  return (
    <userBlock>
      <div className="contents">
        <h2>
          {/* <a rel="noopener noreferrer">{ART_NAME}</a> */}
          <p>{user_id}</p>
        </h2>
        <p>유저 이름: {user_name}</p>
        <p>유저 이메일: {user_mail}</p>
        <p>유저 비밀번호: {user_pw}</p>
      </div>
    </userBlock>
  );
};
export default Adminuseritem;
