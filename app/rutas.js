const express =require("express")
const rutero=express.Router()
const controladorprueba=require("./controladores/prueba")
const controlador_login=require("./controladores/login")


rutero.post("/rutaprueba",controladorprueba.inicio)
rutero.post("/login",controlador_login.login)
rutero.post("/registrar",controlador_login.registro)


module.exports=rutero;