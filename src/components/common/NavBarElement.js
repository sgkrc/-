import React, { useState } from "react";
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
<<<<<<< HEAD
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    localStorage.removeItem("user");
    navigate("/");
  };
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (e) => {
  //   if (searchTerm.trim() !== "") {
  //     const encodedSearchTerm = encodeURIComponent(searchTerm);
  //     console.log("검색어(nbe):", encodedSearchTerm); // 검색어 출력
  //     navigate(`/ExhibitionSearchList?query=${encodedSearchTerm}`);
  //   }
  // };
  const handleSearch = (e) => {
    if (searchTerm.trim() !== "") {
      localStorage.setItem("searchTerm", searchTerm);
      navigate(`/ExhibitionSearchList`);
    }
=======
  const navigate = useNavigate(); // useNavigate 훅을 통해 페이지 이동 함수를 가져옵니다.

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 실행되는 함수
    onLogout(); // 로그아웃 동작
    localStorage.removeItem('user');
    // 페이지를 리디렉션
    navigate("/"); // 로그아웃 후 홈 페이지로 이동
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
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
          <Form onSubmit={handleSearch}>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Col>
        <Col className="d-flex justify-content-center">
          {user ? (
            <div className="right d-flex align-items-center">
              <UserInfo>{user.username}</UserInfo>
<<<<<<< HEAD
              <Button onClick={handleLogout} className="btn btn-lg">
                로그아웃
              </Button>
=======
              <Button onClick={handleLogout}>로그아웃</Button>
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
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
              <NavDropdown.Item href="/ExhibitionList">
                전시회 목록
              </NavDropdown.Item>
              <NavDropdown.Item href="/RecommendedExhibition">
                추천 전시회
              </NavDropdown.Item>
              <NavDropdown.Item href="/DiscountExhibition">
                할인 전시회
              </NavDropdown.Item>
              <NavDropdown.Item href="/ExhibitionList">
                전시회 배경지식
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/RatingList" style={{ marginRight: "50px" }}>
              평가
            </Nav.Link>
            <Nav.Link href="/Recommend" style={{ marginRight: "50px" }}>
              취향 추천
            </Nav.Link>
            <Nav.Link href="/MyPage" style={{ marginRight: "50px" }}>
              마이페이지
            </Nav.Link>
            <Nav.Link href="/" style={{ marginRight: "50px" }}>
              문의사항
            </Nav.Link>
            {user && user.username === "admin" ? (
              <Nav.Link href="/AdminMain" style={{ marginRight: "50px" }}>
                관리자 페이지
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </Container>
  );
};
export default NavBarElement;
