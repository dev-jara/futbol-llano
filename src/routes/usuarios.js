const express = require('express')
const router = express.Router()
const {getUsuarios, getUsuariosByid, createUsuario, updateUsuario, deleteUsuario}= require('../controllers/usuariosController')

router.get('/', getUsuarios)
router.get('/:id', getUsuariosByid)
router.post('/', createUsuario)
router.put('/:id',updateUsuario )
router.delete('/:id',deleteUsuario )



module.exports=router