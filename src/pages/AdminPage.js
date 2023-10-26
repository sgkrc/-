import React from "react";
import { Nav, Table } from "react-bootstrap";

const ex1 = [
  {
    username: "한승희",
    name: "han",
    email: "aa@aa",
    password: "1212",
  },
  {
    username: "김민수",
    name: "kim",
    email: "bb@bb",
    password: "1234",
  },
  {
    username: "신재훈",
    name: "sin",
    email: "22@11",
    password: "1111",
  },
];

const ex2 = [
  {
    title: "한승희",
    art: "han",
    explain: "aa@aa",
    date: "1212",
  },
  {
    title: "김민수",
    art: "kim",
    explain: "bb@bb",
    date: "1234",
  },
  {
    title: "신재훈",
    art: "sin",
    explain: "22@11",
    date: "1111",
  },
];
const AdminPage = () => {
  return (
    <div>
      <h1>관리자 페이지</h1>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="flex-column"
        style={{ width: "200px", height: "400px" }}
      >
        <Nav.Item>
          <Nav.Link
            href="/"
            style={{ marginBottom: "20px", marginTop: "20px", padding: "20px" }}
          >
            유저관리
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/"
            style={{ marginBottom: "20px", marginTop: "20px", padding: "20px" }}
          >
            전시회 관리
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/"
            style={{ marginBottom: "20px", marginTop: "20px", padding: "20px" }}
          >
            취향 추천 관리
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {Object.keys(ex1[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ex1.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
