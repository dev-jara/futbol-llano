const express = require('express')
const router = express.Router()
const {getLigas, getLigasByid,createLiga,updateLiga, deleteLiga} = require ('../controllers/ligasController')

router.get('/', getLigas)
router.get('/:id', getLigasByid)
router.post('/', createLiga)
router.put('/:id',updateLiga)
router.delete('/:id', deleteLiga)

module.exports = router

