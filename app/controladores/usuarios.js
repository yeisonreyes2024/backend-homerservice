const controlador_usuarios = module.exports;
const service_usuarios = require('../servicios/usuarios');

controlador_usuarios.login = async (req, res) => {
  const body = req.body;
  return await service_usuarios
    .login(body.email, body.password)
    .then((response) => {
      if (response.error === false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};

controlador_usuarios.registro = async (req, res) => {
  const usuario = req.body;
  return await service_usuarios
    .registro(usuario)
    .then((response) => {
      if (response.error == false) {
        console.log('respuesta', response);

        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.actualizar = async (req, res) => {
  const usuario = req.body;
  return await service_usuarios
    .actualizar(usuario)
    .then((response) => {
      if (response.error == false) {
        console.log('respuesta', response);

        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.listar = async (req, res) => {
  return await service_usuarios
    .listar()
    .then((response) => {
      if (response.error == false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.eliminar = async (req, res) => {
  const idUsuario = req.params.id;
  return await service_usuarios
    .eliminar(idUsuario)
    .then((response) => {
      if (response.error == false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.buscar_por_id = async (req, res) => {
  const idUsuario = req.params.id;
  return await service_usuarios
    .buscar_por_id(idUsuario)
    .then((response) => {
      if (response.error == false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.buscar_por_identificacion = async (req, res) => {
  const identificacion = req.params.identificacion;
  return await service_usuarios
    .buscar_por_identificacion(identificacion)
    .then((response) => {
      if (response.error == false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
controlador_usuarios.buscar_por_email = async (req, res) => {
  const email = req.params.email;
  return await service_usuarios
    .buscar_por_email(email)
    .then((response) => {
      if (response.error == false) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json(error);
    });
};
