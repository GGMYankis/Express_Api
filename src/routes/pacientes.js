const express = require("express");
const controller = require("../controllers/all");

const router = express.Router();

router.get('/pacientes' , controller.pacientes);
router.get('/medicos' , controller.medicos);
router.get('/medicamentos' , controller.medicamentos );
router.get('/almacen' , controller.almacen );
router.get('/ListadoCamas' , controller.camas );
router.get('/camaFiltradas/:idSala' , controller.camasFiltradas );
router.get('/salas' , controller.salas );

module.exports = router;