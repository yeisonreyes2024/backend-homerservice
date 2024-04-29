const db_usuarios = module.exports;
const base_datos = require('../configuraciones/conexion');

db_usuarios.login = (email, password) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM usuario WHERE correo = ? AND contrasenia = ?',
      [email, password],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};
db_usuarios.registro = (usuario) => {
  const {
    nombre,
    apellido,
    identificacion,
    celular,
    direccion,
    correo,
    contrasenia,
  } = usuario;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'INSERT INTO usuario (nombre,apellido,identificacion,celular,direccion,correo,contrasenia) VALUES (?,?,?,?,?,?,?) ',
      [
        nombre,
        apellido,
        identificacion,
        celular,
        direccion,
        correo,
        contrasenia,
      ],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          console.log('rows', rows);
          resolve(rows);
        }
      }
    );
  });
};
db_usuarios.listar = () => {
  return new Promise((resolve, reject) => {
    base_datos.query('SELECT * FROM usuario', (err, rows) => {
      if (err) {
        console.log('Error: ', err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
db_usuarios.buscar_por_id = (idUsuario) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM usuario WHERE id = ?',
      [idUsuario],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};
db_usuarios.buscar_por_identificacion = (identificacion) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM usuario WHERE identificacion =?',
      [identificacion],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};
db_usuarios.buscar_por_email = (email) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM usuario WHERE correo=?',
      [email],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};
db_usuarios.actualizar = (usuario) => {
  const {
    nombre,
    apellido,
    identificacion,
    celular,
    direccion,
    correo,
    contrasenia,
    id,
  } = usuario;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'UPDATE usuario  SET nombre = ?,apellido =?,identificacion=?,celular=?,direccion=?,correo=?,contrasenia=? WHERE id=?',
      [
        nombre,
        apellido,
        identificacion,
        celular,
        direccion,
        correo,
        contrasenia,
        id,
      ],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          console.log('rows', rows);
          resolve(rows);
        }
      }
    );
  });
};
db_usuarios.eliminar = (idUsuario) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'DELETE  FROM usuario WHERE id = ?',
      [idUsuario],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};
