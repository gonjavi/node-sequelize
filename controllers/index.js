const { Profesor } = require('../models');

const createProfesor = async (req, res) => {
  try {
      const profesor = await Profesor.create(req.body);
      return res.status(201).json({
          profesor,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}
module.exports = {
  createProfesor
}