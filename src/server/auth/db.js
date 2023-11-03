const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "1111",
  database: "user",
});

db.connect();
module.exports = db;

// 서버 연결 시 발생
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// });