var mysql = require("mysql");
require('dotenv').config();
let env = process.env;

if (env.JAWSDB_URL) {
  connection = mysql.createConnection(env.JAWSDB_URL);
}
else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: env.dbPassword,
    database: "burgers_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
