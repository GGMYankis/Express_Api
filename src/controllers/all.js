var conexion = require("../config/conexion");

const ctrl = {};

//Listado de todos los pacientes
ctrl.pacientes = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query(
        "select fecing as fechaInicio , docpac as documento, nompac as nombre , fecnac  as fechaNacimiento, edapac as edad , sexpac as sexo , dirempenc as direccion, telpac as telefono from cli_pacientes"
      );
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};

//Listado de todos los medicos
ctrl.medicos = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query(
        "SELECT  codmed as codigo , nommed as nombre  , cedmed ,  activo   FROM cli_medicos"
      );
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};

//Listado de todos los medicamentos
ctrl.medicamentos = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query("SELECT TOP 5 * FROM medicamentos");
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};
//Listado de todos los almacenes
ctrl.almacen = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query("SELECT resalm , codalm FROM inv_almacen");
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};

//Listado de todas las camas
ctrl.camas = async (req, res) => {
  try {
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query(
        "select codcam as codigo , nomcam as nombre  , codsal as codigoSala , estcam as estado from cli_camas"
      );
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};

//Listado de las camas por salas
ctrl.camasFiltradas = async (req, res) => {
  try {
    const idSala = req.params.idSala;
    const pool = await conexion.poolPromise;
    const result = await pool
      .request()
      .query(
        `select codcam as codigo , nomcam as nombre  , codsal as codigoSala , estcam as estado from cli_camas  where codsal = ${idSala}`
      );
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};

//Listado de las salas
ctrl.salas = async (req, res) => {
  try {
    const idSala = req.params.idSala;
    const pool = await conexion.poolPromise;
    const result = await pool.request().query(
      `select * from cli_salas
        `
    );
    res.json({
      status: true,
      value: result.recordset,
      msgError: null,
    });
  } catch (error) {
    res.json({
      status: false,
      value: null,
      msgError: "error al encontrar datos",
    });
  }
};
module.exports = ctrl;
