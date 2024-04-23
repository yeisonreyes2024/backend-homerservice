const mysql=require("mysql2")

const conexion=mysql.createPool({
    host:"localhost",
    port:3306,
    user:"root",
    password:"12345",
    database:"homeservice",
});


module.exports=conexion;