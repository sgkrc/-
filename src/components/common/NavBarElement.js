import React from "react";
import styled from "styled-components";
import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const NavBarElement = ({ user, onLogout }) => {
  const navigate = useNavigate(); // useNavigate 훅을 통해 페이지 이동 함수를 가져옵니다.

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 실행되는 함수
    onLogout(); // 로그아웃 동작
    localStorage.removeItem("user");
    // 페이지를 리디렉션
    navigate("/"); // 로그아웃 후 홈 페이지로 이동
  };
  return (
    <Container>
      <br />
      <Row>
        <Col className="d-flex justify-content-center">
          <Navbar.Brand href="/">
            <img
              src="images/artroot_logo.png"
              width="100"
              height="100"
              alt="Artroot"
            ></img>
          </Navbar.Brand>
        </Col>
        <Col
          xs={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col className="d-flex justify-content-center">
          {user ? (
            <div className="right d-flex align-items-center">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={handleLogout} className="btn btn-lg">
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right d-flex align-items-center">
              <Button href="/LogIn" className="btn btn-lg">
                로그인
              </Button>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <Navbar expand="sm" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={{
                marginRight: "50px",
                marginLeft: "50px",
              }}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="전시회"
              style={{ marginRight: "50px" }}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/ExhibitonList">
                전시회 목록
              </NavDropdown.Item>
              <NavDropdown.Item href="/Exhibitondetail">
                추천 전시회
              </NavDropdown.Item>
              <NavDropdown.Item href="/ExhibitonList">
                할인 전시회
              </NavDropdown.Item>
              <NavDropdown.Item href="/ExhibitonList">
                전시회 배경지식
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Rating" style={{ marginRight: "50px" }}>
              평가
            </Nav.Link>
            <Nav.Link href="#recommend" style={{ marginRight: "50px" }}>
              취향 추천
            </Nav.Link>
            <Nav.Link href="/MyPage" style={{ marginRight: "50px" }}>
              마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </Container>
  );
};

export default NavBarElement;
