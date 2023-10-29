const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 4000;

// MySQL 연결 설정
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a161319a!",
  database: "db23208",
});

// 미들웨어 설정
app.use(cors()); // CORS 설정
app.use(bodyParser.json()); // 요청 본문 파싱

app.get("/", (req, res) => res.send("Hello world!!!"));

//로그인
app.post("/login", (req, res) => {
  const user_id = req.body.username;
  const user_pw = req.body.password;

  // 데이터베이스에서 사용자 정보 조회
  const sql = "SELECT * FROM user WHERE user_id = ?";
  con.query(sql, [user_id], (err, results) => {
    if (err) {
      console.log("에러 발생");
      return res.status(500).json({ error: "로그인 실패 : 에러 발생", err });
    }

    // 사용자 정보가 조회되지 않으면 로그인 실패
    if (results.length === 0) {
      console.log("사용자 정보가 없음");
      return res.status(401).json({ error: "로그인 실패 : 사용자 정보 조회X" });
    }

    const user = results[0];

    // 비밀번호 비교
    if (user.USER_PW === user_pw) {
      // 로그인 성공
      console.log("로그인 성공");
      console.log(user);
      res.status(200).json({
        id: user.id,
        username: user.USER_ID,
        name: user.USER_NAME,
        email: user.USER_MAIL,
      }); //사용자 정보를 응답에 포함
    } else {
      // 로그인 실패
      console.log("로그인 실패");
      console.log(user_id);
      console.log("비밀번호 오류");
      console.log(user);
    }
  });
});

// POST - 회원가입 요청 처리
app.post("/register", (req, res) => {
  const user_id = req.body.username;
  const user_pw = req.body.password;
  const user_name = req.body.name;
  const user_mail = req.body.email;

  // 필수 필드 누락 확인
  if (!user_id || !user_pw || !user_name || !user_mail) {
    return res.status(400).json({ error: "모든 필드를 입력해야 합니다." });
  }

  const sql =
    "INSERT INTO user (user_id, user_pw, user_name, user_mail) VALUES (?, ?, ?, ?)";

  con.query(
    sql,
    [user_id, user_pw, user_name, user_mail],
    function (err, result) {
      if (err) {
        console.log("회원가입 실패");
        console.log(err);
      } else {
        console.log("회원가입 성공");
        return res.status(200).json({ success: "회원가입 성공" });
      }
    }
  );
});
app.get("/welcome", (req, res) => {
  // 여기에서 사용자 상태 확인 또는 필요한 데이터를 응답할 수 있습니다.
  console.log("어서와");
  res.json({ message: "환영합니다" });
});
// 서버 시작
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
