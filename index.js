const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "db-test-1.cclkjrtv3cvn.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "SuperBigGoblin$60help#",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

pool.getConnection(function (err, conn) {
  if (err) throw err;

  pool.query(`SHOW DATABASES;`, function (err, rows, fields) {
    console.log(rows);
  });

  conn.release();
});
