const express= require("express")

class Servidor{
    PUERTO=3000;
 
    constructor(){
        this.app=express();
        this.inicio()
    }
    
    inicio(){
        this.app.listen(this.PUERTO,()=>{
            console.log("Encendido en puerto: "+this.PUERTO
                
            );
        })
    }
}
const servidor=new Servidor();
module.exports=servidor.app;