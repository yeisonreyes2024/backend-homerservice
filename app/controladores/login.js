const controlador_login=module.exports
const service_login=require("../servicios/login")

controlador_login.login=async(req,res)=>{
    const body=req.body;
    return await service_login.login(body.email,body.password).then(response=>{
        console.log('respuesta', response);
        if(response.error == false){

            res.status(200).json(response)
        }else{
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}

controlador_login.registro=async(req,res)=>{
    const usuario=req.body;
    return await service_login.registro(usuario).then(response=>{
        if(response.error == false){
            console.log('respuesta', response);

            res.status(200).json(response)
        }else{
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}