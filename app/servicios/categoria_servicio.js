const service_categoria_servicio = module.exports;
const db_categoria_servicio = require('../datos/db_categoria_servicio');

service_categoria_servicio.crear = async (categoriaServicio) => {
  const data = await db_categoria_servicio.crear(categoriaServicio);
  return { error: false, data };
};
service_categoria_servicio.actualizar = async (categoriaServicio) => {
  const data = await db_categoria_servicio.actualizar(categoriaServicio);
  return { error: false, data };
};
service_categoria_servicio.listar = async (id) => {
  const data = await db_categoria_servicio.listar();
  return { error: false, data };
};
service_categoria_servicio.buscar_por_id = async (id) => {
  const data = await db_categoria_servicio.buscar_por_id(id);
  return { error: false, data };
};
service_categoria_servicio.buscar_por_nombre = async (nombreCategoria) => {
  const data = await db_categoria_servicio.buscar_por_nombre(nombreCategoria);
  return { error: false, data };
};
service_categoria_servicio.eliminar = async (id) => {
  const data = await db_categoria_servicio.eliminar(id);
  return { error: false, data };
};
