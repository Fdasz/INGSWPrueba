const { getRepository } = require("typeorm");
const Asistencia = require("../entity/Asistencia");

const getAsistencias = async (req, res) => {
    try {
        const asistenciaRepository = getRepository(Asistencia);
        const asistencias = await asistenciaRepository.find();
        res.json(asistencias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAsistencia = async (req, res) => {
    const { fecha, hora_entrada, hora_salida, rut_usuario } = req.body;
    try {
        const asistenciaRepository = getRepository(Asistencia);
        const nuevaAsistencia = asistenciaRepository.create({
            fecha,
            hora_entrada,
            hora_salida,
            rut_usuario
        });
        
        const asistencia = await asistenciaRepository.save(nuevaAsistencia);
        res.status(201).json(asistencia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAsistencia = async (req, res) => {
    const { id } = req.params;
    const { fecha, hora_entrada, hora_salida, rut_usuario } = req.body;
    try {
        const asistenciaRepository = getRepository(Asistencia);
        
        // Verificar si la asistencia existe
        const asistencia = await asistenciaRepository.findOne(id);
        if (!asistencia) {
            return res.status(404).json({ message: "Asistencia no encontrada" });
        }

        // Actualizar los campos
        asistencia.fecha = fecha;
        asistencia.hora_entrada = hora_entrada;
        asistencia.hora_salida = hora_salida;
        asistencia.rut_usuario = rut_usuario;

        // Guardar los cambios
        await asistenciaRepository.save(asistencia);
        res.status(200).json({ message: 'Asistencia actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAsistencias,
    createAsistencia,
    updateAsistencia
};
