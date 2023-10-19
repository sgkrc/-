import "./App.css";
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
import NavBarElement from "./components/common/NavBarElement";
import NavContainer from "./containers/common/NavContainer";

function App() {
  return (
    <Router>
      <NavContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ExhibitonList" element={<ExhibitonList />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/SignUpComplete" element={<SignUpComplete />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
