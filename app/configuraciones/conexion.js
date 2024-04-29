require('dotenv').config();

const mysql = require('mysql2');

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const conexion = mysql.createPool({
  connectionLimit: 10,
  host: 'roundhouse.proxy.rlwy.net',
  port: 49828,
  user: 'root',
  password: 'MmUVKVKgmkJkOPWEaMjgxjUhzklvNKhe',
  database: 'railway',
});
// const conexion = mysql.createPool({
//   connectionLimit: 10,
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
// });

module.exports = conexion;
