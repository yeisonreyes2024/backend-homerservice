const service_prestador_servicio = module.exports;
const db_prestador_servicio = require('../datos/db_prestador_servicios');

service_prestador_servicio.login = async (email, password) => {
  const prestador_servicio = await db_prestador_servicio.login(email, password);
  if (prestador_servicio) {
    return { error: false, data: prestador_servicio };
  } else {
    return { error: true };
  }
};
service_prestador_servicio.registro = async (prestador_servicio) => {
  const resp = await db_prestador_servicio.registro(prestador_servicio);
  return { error: false, resp };
};
service_prestador_servicio.listar = async () => {
  const data = await db_prestador_servicio.listar();
  return { error: false, data };
};
service_prestador_servicio.actualizar = async (prestador_servicio) => {
  const data = await db_prestador_servicio.actualizar(prestador_servicio);
  return { error: false, data };
};
service_prestador_servicio.buscar_por_id = async (id) => {
  const data = await db_prestador_servicio.buscar_por_id(id);
  return { error: false, data };
};
service_prestador_servicio.buscar_por_identificacion = async (
  identificacion
) => {
  const data = await db_prestador_servicio.buscar_por_identificacion(
    identificacion
  );
  return { error: false, data };
};
service_prestador_servicio.buscar_por_email = async (email) => {
  const data = await db_prestador_servicio.buscar_por_email(email);
  return { error: false, data };
};
service_prestador_servicio.eliminar = async (id) => {
  const data = await db_prestador_servicio.eliminar(id);
  return { error: false, data };
};
