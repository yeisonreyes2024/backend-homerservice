const express = require('express');
const rutero = express.Router();
const controlador_usuarios = require('./controladores/usuarios');
const controlador_prestador_servicio = require('./controladores/prestador_servicio');
const controlador_categoria_servicios = require('./controladores/categoria_servicio');
const controlador_servicio = require('./controladores/servicio');

// Rutas de usuario
rutero.post('/usuario/login', controlador_usuarios.login);
rutero.post('/usuario/registrar', controlador_usuarios.registro);
rutero.get('/usuario/listar', controlador_usuarios.listar);
rutero.get('/usuario/buscar-por-id/:id', controlador_usuarios.buscar_por_id);
rutero.get(
  '/usuario/buscar-por-identificacion/:identificacion',
  controlador_usuarios.buscar_por_identificacion
);
rutero.get(
  '/usuario/buscar-por-email/:email',
  controlador_usuarios.buscar_por_email
);
rutero.put('/usuario/actualizar', controlador_usuarios.actualizar);
rutero.delete('/usuario/eliminar/:id', controlador_usuarios.eliminar);

// Rutas prestador de servicio
rutero.post('/prestador-servicio/login', controlador_prestador_servicio.login);
rutero.post(
  '/prestador-servicio/registrar',
  controlador_prestador_servicio.registro
);
rutero.get('/prestador-servicio/listar', controlador_prestador_servicio.listar);
rutero.get(
  '/prestador-servicio/buscar-por-id/:id',
  controlador_prestador_servicio.buscar_por_id
);
rutero.get(
  '/prestador-servicio/buscar-por-identificacion/:identificacion',
  controlador_prestador_servicio.buscar_por_identificacion
);
rutero.get(
  '/prestador-servicio/buscar-por-email/:email',
  controlador_prestador_servicio.buscar_por_email
);
rutero.put(
  '/prestador-servicio/actualizar',
  controlador_prestador_servicio.actualizar
);
rutero.delete(
  '/prestador-servicio/eliminar/:id',
  controlador_prestador_servicio.eliminar
);

// Rutas categoría de servicios
rutero.post('/categoria-servicio/crear', controlador_categoria_servicios.crear);
rutero.get(
  '/categoria-servicio/listar',
  controlador_categoria_servicios.listar
);
rutero.get(
  '/categoria-servicio/buscar-por-id/:id',
  controlador_categoria_servicios.buscar_por_id
);
rutero.get(
  '/categoria-servicio/buscar-por-nombre/:nombre',
  controlador_categoria_servicios.buscar_por_nombre
);

rutero.put(
  '/categoria-servicio/actualizar',
  controlador_categoria_servicios.actualizar
);
rutero.delete(
  '/categoria-servicio/eliminar/:id',
  controlador_categoria_servicios.eliminar
);

// rutas servicios
rutero.post('/servicio/crear', controlador_servicio.crear);
rutero.get('/servicio/listar', controlador_servicio.listar);
rutero.get('/servicio/buscar-por-id/:id', controlador_servicio.buscar_por_id);
rutero.get(
  '/servicio/buscar-por-nombre/:nombre',
  controlador_servicio.buscar_por_nombre
);

rutero.put('/servicio/actualizar', controlador_servicio.actualizar);
rutero.delete('/servicio/eliminar/:id', controlador_servicio.eliminar);

module.exports = rutero;
