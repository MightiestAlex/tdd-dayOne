const mysql = require('mysql2');
​
const con = mysql.createConnection({
    host: "db-test-1.cclkjrtv3cvn.eu-north-1.rds.amazonaws.com",
    user: "admin",
    password: "SuperBigGoblin$60help#"
});
​
con.connect(function(err) {
    if (err) throw err;
​
    console.log("Connected!");
​
    con.query(`CREATE DATABASE IF NOT EXISTS;`)
    con.query(`USE test;`)
    con.query(`CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));`)
​
    con.query(`SHOW TABLES;`, function(error, result, fields) {
        console.log(result);
    });
​
    
    
    con.end();
});