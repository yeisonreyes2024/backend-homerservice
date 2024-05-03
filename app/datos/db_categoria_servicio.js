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
  console.log(categoria_servicio);
  // {
  //   userId: 4,
  //   nombres: 'Jesús',
  //   apellidos: 'Durán',
  //   tipoServicio: 'Electricista',
  //   telefono: '3051903883'
  // }
  const { tipoServicio, userId } = categoria_servicio;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'UPDATE categoriadeservicio  SET nombreCategoria =? WHERE id = ?',
      [tipoServicio, userId],
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
  console.log("eliminar", id)
  return new Promise((resolve, reject) => {
    base_datos.query(
      'DELETE FROM categoriadeservicio WHERE id=?',
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
