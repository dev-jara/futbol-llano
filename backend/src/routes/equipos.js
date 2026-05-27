const express = require ('express')
const router = express.Router()
const {getEquipos, getequiposByid, createEquipo, updateEquipo, deleteEquipo} = require('../controllers/equiposController')

router.get('/', getEquipos)
router.get('/:id',getequiposByid )
router.post('/', createEquipo )
router.put('/:id', updateEquipo)
router.delete('/:id', deleteEquipo)

module.exports= router