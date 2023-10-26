import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// 서버에서 받아오는 데이터를 연동해서 다시 적용하기
const myInfo = {
  userid: "han",
  name: "한승희",
  email: "aaa@aaa",
  password: "1234566",
};
const MyPage = () => {
  return (
    <div>
      <h1>마이페이지</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>이름</Form.Label>
          <Form.Control placeholder={myInfo.name} />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={myInfo.email} />
        </Form.Group>
        <br />
        <Button href="/ChangePW" type="submit">
          비밀번호 바꾸기
        </Button>
        <br />
        <br />
        <Button variant="primary" type="submit">
          정보 수정하기
        </Button>
      </Form>
      <br />
      <Link to="/">로그아웃</Link> <Link to="/">탈퇴하기</Link>
    </div>
  );
};

export default MyPage;
