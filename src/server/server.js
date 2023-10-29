const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 4000;

app.use(
  session({
    secret: 'ksh202326008?!', // 세션 데이터 암호화에 사용될 키
    resave: false,
    saveUninitialized: true,
  })
);

// MySQL 연결 설정
const con = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '1111',
  database: 'user',
  port: 3306,
});

// 미들웨어 설정
app.use(cors()); // CORS 설정
app.use(bodyParser.json()); // 요청 본문 파싱

// 로그인
app.post('/LogIn', (req, res) => {
  const user_id = req.body.username;
  const user_pw = req.body.password;

  // 데이터베이스에서 사용자 정보 조회
  const sql = 'SELECT * FROM user_tb WHERE user_id = ?';
  con.query(sql, [user_id], (err, results) => {
    if (err) {
      console.log('에러 발생');
      console.log(err)
      return res.status(500).json({ error: '로그인 실패' });
    }

    // 사용자 정보가 조회되지 않으면 로그인 실패
    if (results.length === 0) {
      console.log('사용자 정보가 없음');
      console.log(err)
      return res.status(401).json({ error: '로그인 실패' });
    }

    const user = results[0];

    // 비밀번호 비교
    if (user.user_pw === user_pw) {
      console.log("로그인 성공함")
      req.session.username = user.user_id;
      console.log('로그인한 유저의 아이디:', user.user_id); // 유저 아이디를 콘솔에 출력
      res.status(200).json({ user: user }); // 사용자 정보를 응답에 포함
    } else {
      // 로그인 실패
      console.log('로그인 실패함');
      console.log(err)
    }
  });
});

// 회원가입
app.post('/Register', (req, res) => {
  const user_id = req.body.username;
  const user_pw = req.body.password;
  const user_name = req.body.name;
  const user_mail = req.body.email;

  // 필수 필드 누락 확인
  if (!user_id || !user_pw || !user_name || !user_mail) {
    return res.status(400).json({ error: '모든 필드를 입력해야 합니다.' });
  }

  var sql = 'INSERT INTO user_tb (user_id, user_pw, user_name, user_mail) VALUES (?, ?, ?, ?)';

  con.query(sql, [user_id, user_pw, user_name, user_mail], function (err, result) {
    if (err) {
      console.log('회원가입 실패');
      console.log(err)
      return res.status(500).json({ error: '회원가입 실패' });
    } else {
      const user = {
        user_id: user_id,
        user_name: user_name,
        user_mail: user_mail
      };
      console.log('회원가입 성공');
      res.status(200).json({ user: user });
    }
  });
});

// 로그아웃
app.post('/Logout', (req, res) => {
  // 세션 제거
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: '세션 제거 실패' });
    } else {
      // 로그아웃 성공 후 클라이언트에게 리디렉션할 주소 전달
      console.log("로그아웃!!");
      res.status(200).json({ redirectTo: '../pages/Home' });
    }
  });
});

// 로그인 완료
app.get('/Welcome', (req, res) => {
  // 여기에서 사용자 상태 확인 또는 필요한 데이터를 응답할 수 있습니다.
  console.log('어서와')
  res.json({ message: '환영합니다' });
});

// 회원가입 완료
app.get('/SignUpComplete', (req, res) => {
  console.log('회원가입 끝')
  res.json({ message: '회원가입 환영' });
});

// 아이디 찾기
app.post('/FindID', (req, res) => {
  const user_name = req.body.name;
  const user_mail = req.body.email;

  // 데이터베이스에서 해당 이름과 이메일로 유저 아이디 조회
  const sql = 'SELECT user_id FROM user_tb WHERE user_name = ? AND user_mail = ?';
  con.query(sql, [user_name, user_mail], (err, results) => {
    if (err) {
      console.log('에러 발생');
      console.log(err);
      return res.status(500).json({ error: '아이디 찾기 실패' });
    }

    // 사용자 정보가 조회되지 않으면 아이디 찾기 실패
    if (results.length === 0) {
      console.log('사용자 정보가 없음');
      return res.status(404).json({ error: '일치하는 사용자 정보 없음' });
    }

    const user = results[0];

    // 아이디 찾기 성공
    console.log('아이디 찾기 성공:', user.user_id);
    res.status(200).json({ userId: user.user_id }); // 유저 아이디를 응답에 포함
  });
});

// 비밀번호 찾기
app.post('/FindPW', (req, res) => {
  const user_id = req.body.username;
  const user_mail = req.body.email;

  // 데이터베이스에서 해당 아이디와 이메일로 유저 비밀번호 조회
  const sql = 'SELECT user_pw FROM user_tb WHERE user_id = ? AND user_mail = ?';
  con.query(sql, [user_id, user_mail], (err, results) => {
    if (err) {
      console.log('에러 발생');
      console.log(err);
      return res.status(500).json({ error: '비밀번호 찾기 실패' });
    }

    // 사용자 정보가 조회되지 않으면 비밀번호 찾기 실패
    if (results.length === 0) {
      console.log('사용자 정보가 없음');
      return res.status(404).json({ error: '일치하는 사용자 정보 없음' });
    }

    const user = results[0];
    //const userPW = user.user_pw.toString(); - 필요할 경우 문자열, 숫자 변환용
    // 비밀번호 찾기 성공
    console.log('비밀번호 찾기 성공:', user.user_pw);
    res.status(200).json({ userPW: user.user_pw }); // 유저 비밀번호를 응답에 포함
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});