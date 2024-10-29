// routes/asistenciaRoutes.js
const express = require('express');
const router = express.Router();
const asistenciaController = require('../controllers/asistenciaController');

router.get('/', asistenciaController.getAsistencias); // Ruta para obtener todas las asistencias
router.post('/', asistenciaController.createAsistencia); // Ruta para crear una nueva asistencia
router.put('/:id', asistenciaController.updateAsistencia); // Ruta para actualizar una asistencia por id

module.exports = router;
