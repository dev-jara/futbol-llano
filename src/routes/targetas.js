const express = require('express')
const router = express.Router()
const {getTarjetas, getTarjetasByid, createTarjeta,updateTarjeta, deleteTarjeta}= require('../controllers/tarjetasController')

router.get('/', getTarjetas)
router.get('/:id', getTarjetasByid)
router.post('/', createTarjeta)
router.put('/:id', updateTarjeta)
router.delete('/:id', deleteTarjeta)

module.exports=router