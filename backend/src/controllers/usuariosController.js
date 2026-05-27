const pool = require('../models/db')
const bcrypt = require('bcrypt')

const getUsuarios =async(req, res)=>{
    try{
        const result = await pool.query('SELECT id_usuario, nombre, email, rol, id_cliente FROM usuarios')
        res.json(result.rows)

    }catch(error){
          res.status(500).json({mensaje:'No se encontran usuarios'})
    }
}
const getUsuariosByid =async(req, res)=>{
    try{
        const result= await pool.query('SELECT id_usuario, nombre, email, rol, id_cliente FROM usuarios WHERE id_usuario = $1',
            [req.params.id])
            if(!result.rows[0]){
                return res.status(404).json({mensaje:'Usuario no encontrado'})
            }
            res.json(result.rows[0])

    }catch(error){
        res.status(500).json({Mensaje:'No se logro optener el usuario'})
    }
}
const createUsuario =async(req, res)=>{
    try{
        const{nombre, email, password, rol, id_cliente}=req.body
        const hashedPassword = await bcrypt.hash( password, 10)
        const result = await pool.query(
            'INSERT INTO usuarios(nombre, email, password, rol, id_cliente) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
            [nombre, email, hashedPassword, rol, id_cliente]
        )
        const{password: pass, ...usuarioSinPassword}=result.rows[0]
        res.status(201).json(usuarioSinPassword)
    }catch(error){
        
        res.status(500).json({mensaje:'No se creo el usuario'})
    }
}
const updateUsuario =async(req, res)=>{
     try{
        const{id}=req.params
        const{nombre, email, password, rol, id_cliente}=req.body
        const result = await pool.query(
            'UPDATE  usuarios SET nombre=$1, email=$2, password=$3, rol=$4, id_cliente=$5 WHERE id_usuario =$6 RETURNING * ',
            [nombre, email, password, rol, id_cliente, id]
        )
        res.status(200).json(result.rows[0])
    }catch(error){
        res.status(500).json({mensaje:'No se actulizo el usuario'})
    }
}
const deleteUsuario =async(req, res)=>{
     try{
        const {id} = req.params
        const result = await pool.query(
            'DELETE FROM usuarios WHERE id_usuario =$1',
            [id]
        )
        res.status(200).json({mensaje:'Usuario eliminado'})

    }catch(error){
        res.status(500).json({mensaje:'Usuario No, eliminado'})

    }
}


module.exports ={getUsuarios, getUsuariosByid, createUsuario, updateUsuario, deleteUsuario }