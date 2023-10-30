import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExhibitonList from "./pages/ExhibitonList";
import MyPage from "./pages/MyPage";
import Recommend from "./pages/Recommend";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Rating from "./pages/Rating";
import SignUpComplete from "./pages/SignUpComplete";
import Welcome from "./pages/Welcome";
import NavContainer from "./containers/common/NavContainer";
import FindID from "./pages/FindID";
import FindPW from "./pages/FindPW";
import ChangePW from "./pages/ChangePW";
import AdminPage from "./pages/AdminPage";
import Exhibitondetail from "./pages/Exhibitondetail"; //각 전시회의 정보가 있는 곳
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // 클라이언트 측에서 세션을 확인
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      {/* 세션 관리를 위해 Home과 LogIn은 따로 빼져 있음 주의!! */}
      <NavContainer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/*  ?? */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/LogIn"
          element={
            <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/ExhibitonList" element={<ExhibitonList />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/SignUpComplete" element={<SignUpComplete />} />
        <Route
          path="/Welcome"
          element={
            <Welcome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/FindID" element={<FindID />} />
        <Route path="/FindPW" element={<FindPW />} />
        <Route path="/ChangePW" element={<ChangePW />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/Exhibitondetail" element={<Exhibitondetail />} />
      </Routes>
      <footer>
        <div>Copyright @artroot</div>
      </footer>
    </Router>
  );
}

export default App;
