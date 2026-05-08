const { verificarToken } = require('../middleware/auth')
const express = require ('express')
const router = express.Router()
const {getJugadores, getjugadoresByid, createJugador, updateJugador, deleteJugador} = require('../controllers/jugadoresController')

 
router.get('/', getJugadores)
router.get('/:id', getjugadoresByid)
router.post('/',verificarToken,  createJugador)
router.put('/:id', updateJugador)
router.delete('/:id', deleteJugador)


module.exports = router