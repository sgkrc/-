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

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const NavBarElement = ({ user, onLogout }) => {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Navbar.Brand href="/">ArtRoot</Navbar.Brand>
        </Col>
        <Col xs={6}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button href="/LogIn">로그인</Button>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <Navbar expand="sm" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="전시회" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ExhibitonList">
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
            <Nav.Link href="/Rating">평가</Nav.Link>
            <Nav.Link href="#recommend">취향 추천</Nav.Link>
            <Nav.Link href="/MyPage">마이페이지</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </Container>
  );
};

export default NavBarElement;
