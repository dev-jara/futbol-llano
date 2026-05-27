const express = require('express')
const router = express.Router()
const { getPartidos,getPartidosByid, createPartido, updatePartido, deletePartido}= require('../controllers/partidosController')

router.get('/', getPartidos)
router.get('/:id', getPartidosByid)
router.post('/', createPartido)
router.put('/:id', updatePartido)
router.delete('/:id', deletePartido)

module.exports=router