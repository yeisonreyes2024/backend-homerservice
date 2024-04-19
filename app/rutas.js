const express =require("express")
const rutero=express.Router()
const controladorprueba=require("./controladores/prueba")

rutero.post("/rutaprueba",controladorprueba.inicio)




module.exports=rutero;