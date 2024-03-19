var conexion = require("../config/conexion");
const ctrl = {};

ctrl.user = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    var request = new conexion.sql.Request(pool);
    request.execute("genao")
      .then((resultado) => {
        res.json({
          status: true,
          value: resultado.recordset,
          msgError: null,
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          value: null,
          msgError: 'error al encontrar datos',
        });
      });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: 'error al encontrar datos',
    });
  }
};

ctrl.eliminar = ("/user/:id", (req, res) => {});

module.exports = ctrl;

/* ctrl.user = async (req, res) => {
  try {
    console.log('llego')
    const pool = await conexion.poolPromise;
    const result = await pool.request().query("SELECT id, documento FROM app_usuarios");
    res.json({
      status:true,
      value:result.recordset,
      msgError: null,
    })
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: error,
    });
  }
}; */
