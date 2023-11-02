import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../modules/user";
// 서버에서 받아오는 데이터를 연동해서 다시 적용하기
const myInfo = {
  userid: "han",
  name: "한승희",
  email: "aaa@aaa",
  password: "1234566",
};
const MyPage = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  // 탈퇴 시 작동되는 modal
  const [show, setShow] = useState(false);
  //setShow가 false면 안보이고, true면 보임
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button variant="info" type="submit">
          정보 수정하기
        </Button>
      </Form>
      <br />
      <Button onClick={onLogout} type="submit">
        로그아웃
      </Button>
      <Button onClick={handleShow} variant="danger" type="submit">
        탈퇴하기
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>탈퇴하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말로 탈퇴하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
            }}
          >
            탈퇴하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyPage;
