var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "127.0.0.1",
    user: "root",
    port: 3308,
    password: "amr.amr2013",
    database: "tutu",
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // let sql = "CREATE DATABASE IF NOT EXISTS tutu";
    let sql = "SELECT * FROM users";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("table created");
        console.log(result);
        res.send(result);
    })
	// res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
	connection.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
	});
});
