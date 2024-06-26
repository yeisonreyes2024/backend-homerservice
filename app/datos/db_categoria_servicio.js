const db_categoria_servicio = module.exports;
const base_datos = require('../configuraciones/conexion');

db_categoria_servicio.crear = (categoria_servicio) => {
  const { nombreCategoria } = categoria_servicio;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'INSERT INTO categoriadeservicio (nombreCategoria) VALUES (?)',
      [nombreCategoria],
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
db_categoria_servicio.actualizar = (categoria_servicio) => {
  const { nombreCategoria, id } = categoria_servicio;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'UPDATE categoriadeservicio  SET nombreCategoria =? WHERE id = ?',
      [nombreCategoria, id],
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
db_categoria_servicio.listar = () => {
  return new Promise((resolve, reject) => {
    base_datos.query('SELECT * FROM categoriadeservicio', (err, rows) => {
      if (err) {
        console.log('Error: ', err);
        reject(err);
      } else {
        console.log('rows', rows);
        resolve(rows);
      }
    });
  });
};
db_categoria_servicio.buscar_por_id = (id) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM categoriadeservicio WHERE id=?',
      [id],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          console.log('rows', rows);
          resolve(rows[0]);
        }
      }
    );
  });
};
db_categoria_servicio.buscar_por_nombreCategoria = (nombreCategoria) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM categoriadeservicio WHERE nombreCategoria=?',
      [nombreCategoria],
      (err, rows) => {
        if (err) {
          console.log('Error: ', err);
          reject(err);
        } else {
          console.log('rows', rows);
          resolve(rows[0]);
        }
      }
    );
  });
};
db_categoria_servicio.eliminar = (id) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'DELETE categoriadeservicio WHERE id=?',
      [id],
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
