const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.log(err); //just for dev purpose
  } else {
    console.log('MySQL connected...'); //just for dev purpose
  }
});

module.exports = db;
