const service_usuarios = module.exports;
const db_usuarios = require('../datos/db_usuarios');

service_usuarios.login = async (email, password) => {
  const usuario = await db_usuarios.login(email, password);
  if (usuario) {
    return { error: false, data: usuario };
  } else {
    return { error: true };
  }
};

service_usuarios.registro = async (usuario) => {
  await db_usuarios.registro(usuario);
  return { error: false };
};
service_usuarios.listar = async () => {
  const data = await db_usuarios.listar();
  return { error: false, data };
};
service_usuarios.eliminar = async (idUsuario) => {
  const data = await db_usuarios.eliminar(idUsuario);
  return { error: false, data };
};
service_usuarios.buscar_por_id = async (idUsuario) => {
  const data = await db_usuarios.buscar_por_id(idUsuario);
  return { error: false, data };
};
service_usuarios.buscar_por_identificacion = async (identificacion) => {
  const data = await db_usuarios.buscar_por_identificacion(identificacion);
  return { error: false, data };
};
service_usuarios.buscar_por_email = async (email) => {
  const data = await db_usuarios.buscar_por_email(email);
  return { error: false, data };
};
service_usuarios.actualizar = async (usuario) => {
  await db_usuarios.actualizar(usuario);
  return { error: false };
};
