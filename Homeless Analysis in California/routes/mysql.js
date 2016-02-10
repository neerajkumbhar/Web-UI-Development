var mysql = require('mysql');

function getConnection() {
	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password: 'mukul',
		database : 'homeless',
		port: 3306
	});
	return connection;
}

function fetchData(callback, sqlQuery) {

	//console.log("\nSQL Query::" + sqlQuery);

	var connection = getConnection();

	connection.query(sqlQuery, function(err, rows, fields) {
		if (err) {
			console.log("ERROR: " + err.message);
		} else { // return err or result
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}

function saveData(callback, sqlQuery) {

	console.log("\nSQL Query::" + sqlQuery);

	var connection = getConnection();

	connection.query(sqlQuery, function(err, results) {
		if (err) {
			console.log("ERROR: " + err.message);
		} else { // return err or result
			callback(err, results);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}

function insertData(callBack, data, table) {
	console.log("Inside insert data")
	var connection = getConnection();
	console.log(connection);
	connection.query('INSERT INTO ' + table + ' SET ?', data, function(err,
			rows, fields) {
		// Neat!
		if (err) {
			console.log("ERROR: " + err.message);
		} else { // return err or result
			callBack(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();

}

exports.fetchData = fetchData;
exports.saveData = saveData;
exports.insertData = insertData;