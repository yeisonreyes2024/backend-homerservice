const service_servicio = module.exports;
const db_servicio = require('../datos/db_servicio');

service_servicio.crear = async (categoriaServicio) => {
  const data = await db_servicio.crear(categoriaServicio);
  return { error: false, data };
};
service_servicio.actualizar = async (categoriaServicio) => {
  const data = await db_servicio.actualizar(categoriaServicio);
  return { error: false, data };
};
service_servicio.listar = async (id) => {
  const data = await db_servicio.listar();
  return { error: false, data };
};
service_servicio.buscar_por_id = async (id) => {
  const data = await db_servicio.buscar_por_id(id);
  return { error: false, data };
};
service_servicio.buscar_por_nombre = async (nombreCategoria) => {
  const data = await db_servicio.buscar_por_nombre(nombreCategoria);
  return { error: false, data };
};
service_servicio.eliminar = async (id) => {
  const data = await db_servicio.eliminar(id);
  return { error: false, data };
};
