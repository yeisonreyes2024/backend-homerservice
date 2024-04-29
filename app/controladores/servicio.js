const controlador_servicio = module.exports;
const service_servicio = require('../servicios/categoria_servicio');

controlador_servicio.crear = async (req, res) => {
  const categoria = req.body;
  return await service_servicio
    .crear(categoria)
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
controlador_servicio.actualizar = async (req, res) => {
  const categoria = req.body;
  return await service_servicio
    .actualizar(categoria)
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
controlador_servicio.listar = async (req, res) => {
  return await service_servicio
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
controlador_servicio.buscar_por_id = async (req, res) => {
  const id = req.params.id;
  return await service_servicio
    .buscar_por_id(id)
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
controlador_servicio.buscar_por_nombre = async (req, res) => {
  const nombre = req.params.nombre;
  return await service_servicio
    .buscar_por_nombre(nombre)
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
controlador_servicio.eliminar = async (req, res) => {
  const id = req.params.id;
  return await service_servicio
    .eliminar(id)
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
