import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { update, deleteUser } from "../../lib/api/admin";

const UserBlock = styled.div`
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
  const { user_id, user_name, user_mail, user_pw } = props;
  // 수정할 정보를 저장할 상태 변수 추가
  const [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  // 수정 버튼 클릭 시 호출되는 함수
  const handleUpdate = async () => {
    try {
      // updatedInfo에서 빈 값을 제외한 항목만 보냄
      const response = await update({
        username: user_id, // 수정할 사용자의 아이디도 서버에 전달
        name: updatedInfo.name,
        email: updatedInfo.email,
        newPassword: updatedInfo.password,
      });
      console.log(response);
    } catch (error) {
      console.error("요청 중 오류 발생:", error);
    }
  };
  // 탈퇴 버튼
  const handleDeleteUser = async () => {
    try {
      // 서버로 DELETE 요청을 보내서 사용자 탈퇴를 처리합니다.
      console.log(user_id);
      const response = await deleteUser(user_id);
      console.log(response);
      if (response.status === 200) {
        console.log("사용자 탈퇴 성공");
      } else {
        console.error("사용자 탈퇴 실패");
      }
    } catch (error) {
      console.error("사용자 탈퇴 오류:", error);
    }
  };
  return (
    <UserBlock>
      <div className="contents">
        <h2>
          <p>아이디 : {user_id}</p>
        </h2>
        <Form.Group className="mb-3">
          <Form.Label>유저 이름</Form.Label>
          <Form.Control
            placeholder={props ? user_name : ""}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formGridEmail">
          <Form.Label>유저 email</Form.Label>
          <Form.Control
            type="email"
            placeholder={props ? user_mail : ""}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>유저 비밀번호</Form.Label>
          <Form.Control
            placeholder={props ? user_pw : ""}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, password: e.target.value })
            }
          />
        </Form.Group>

        <Button
          variant="info"
          type="button"
          onClick={handleUpdate} // 수정 버튼 클릭 시 정보 수정 함수 호출
          href="/AdminPage"
        >
          수정
        </Button>
        <Button variant="danger" onClick={handleDeleteUser} href="/AdminPage">
          삭제
        </Button>
        <hr />
      </div>
    </UserBlock>
  );
};
export default Adminuseritem;
