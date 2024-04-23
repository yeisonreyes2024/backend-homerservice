const service_login=module.exports;
const db_login=require("../datos/db_login")

service_login.login=async(email,password)=>{
    const usuario=await db_login.login(email,password);
    console.log('usuario en servicio', usuario);
    if(usuario){

        return {error:false, data:usuario};
    }else{
        return{error:true}
    }
}

service_login.registro=async(usuario)=>{
    console.log('usuario en servicio', usuario);
    await db_login.registro(usuario);
    return {error:false};
}