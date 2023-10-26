import React from "react";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <h1>메인 홈페이지</h1>
      <Button href="/AdminPage">관리자 페이지</Button>
    </div>
  );
};

export default Home;
