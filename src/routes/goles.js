const express = require('express')
const router = express.Router()
const {getGoles, getGolesByid, createGol, updateGol, deleteGol}= require('../controllers/golesController')

router.get('/', getGoles)
router.get('/:id', getGolesByid)
router.post('/', createGol)
router.put('/:id', updateGol)
router.delete('/:id', deleteGol)

module.exports=router