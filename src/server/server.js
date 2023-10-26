const express = require("express");
const app = express();
const session = require("express-session");
const MySqlStore = require("express-mysql-session")(session);
http = require("http");
const options = {
  host: "localhost",
  user: "root", //nodejs
  password: "a161319a!", //nodejs
  database: "db23208",
};
const sessionStore = new MySqlStore(options);

app.use(
  session({
    secret: "fagasd#fasdfe",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);
const auth = require("./auth/login.js");
//로그인
app.get("/login", function (request, response) {
  auth.login(request, response);
});

app.post("/login_process", function (request, response) {
  auth.login_process(request, response);
});

app.get("/logout", function (request, response) {
  auth.logout(request, response);
});
app.listen(4000, () => {
  console.log("서버 4000 실행");
});
