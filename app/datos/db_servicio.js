const db_servicio = module.exports;
const base_datos = require('../configuraciones/conexion');

db_servicio.crear = (servicio) => {
  const { nombreServicio } = servicio;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'INSERT INTO servicio (nombreServicio) VALUES (?)',
      [nombreServicio],
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
db_servicio.actualizar = (servicio) => {
  const { nombreServicio, id } = servicio;
  return new Promise((resolve, reject) => {
    base_datos.query(
      'UPDATE servicio  SET nombreServicio =? WHERE id = ?',
      [nombreServicio, id],
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
db_servicio.listar = () => {
  return new Promise((resolve, reject) => {
    base_datos.query('SELECT * FROM servicio', (err, rows) => {
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
db_servicio.buscar_por_id = (id) => {
  return new Promise((resolve, reject) => {
    base_datos.query('SELECT * FROM servicio WHERE id=?', [id], (err, rows) => {
      if (err) {
        console.log('Error: ', err);
        reject(err);
      } else {
        console.log('rows', rows);
        resolve(rows[0]);
      }
    });
  });
};
db_servicio.buscar_por_nombreServicio = (nombreServicio) => {
  return new Promise((resolve, reject) => {
    base_datos.query(
      'SELECT * FROM servicio WHERE nombreServicio=?',
      [nombreServicio],
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
db_servicio.eliminar = (id) => {
  return new Promise((resolve, reject) => {
    base_datos.query('DELETE servicio WHERE id=?', [id], (err, rows) => {
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
