const db = require("./db");
const qs = require("querystring");

function authIsOwner(request, response) {
  if (request.session.loggined) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  login: function (request, response) {
    var subdoc;
    if (authIsOwner(request, response) === true) {
      response.end("Already Login...GO back");
    } else {
      subdoc = "../pages/LogIn.js";
    }
    var context = {
      doc: subdoc,
      loggined: authIsOwner(request, response),
      id: request.session.login_id,
      cls: request.session.claass,
    };
    request.app.render("index", context, function (err, html) {
      response.end(html);
    });
  },

  login_process: function (request, response) {
    var body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      db.query(
        `SELECT USER_ID, USER_PW, claass FROM user WHERE USER_ID = ? and USER_PW = ?`,
        [post.id, post.pw],
        function (error, result) {
          if (error) {
            throw error;
          }
          if (result[0] === undefined) response.end("Who ?");
          else {
            request.session.loggined = true;
            request.session.login_id = result[0].USER_ID;
            request.session.claass = result[0].claass;
            response.redirect("/");
            //response.end('Welcome !!!');
          }
        }
      );
    });
  },

  logout: function (request, response) {
    request.session.destroy(function (err) {
      response.redirect("/");
    });
  },
};
