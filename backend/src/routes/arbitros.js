const express = require('express')
const router = express.Router()
const {getArbitros, getArbitrosByid, createArbitro, updateArbitro, deleteArbitro}= require('../controllers/arbitrosController')

router.get('/', getArbitros)
router.get('/:id', getArbitrosByid)
router.post('/', createArbitro)
router.put('/:id',updateArbitro)
router.delete('/:id', deleteArbitro)

module.exports=router