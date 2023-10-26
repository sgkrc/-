const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a161319a!",
  database: "db23208",
});
db.connect();
module.exports = db;
