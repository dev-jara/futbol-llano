const express = require('express')
const router = express.Router()
const {getClientes, getClientesByid, createCliente, updateCliente, deleteCliente}= require('../controllers/clientesController')

router.get('/', getClientes)
router.get('/:id', getClientesByid)
router.post('/', createCliente)
router.put('/:id', updateCliente)
router.delete('/:id', deleteCliente)

module.exports=router