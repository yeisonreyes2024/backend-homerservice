const controlador_prueba=module.exports;

controlador_prueba.inicio=async(req,res)=>{        
    console.log("prueba de que hace algo");
    res.json({mensaje: "buenas noches"})
}