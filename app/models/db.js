const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PW,
  database: dbConfig.DBASE
});

connection.connect(err => {
  if (err) throw err;
  console.log('DataBase connected!')
})

module.exports = connection;
