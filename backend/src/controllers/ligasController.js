const pool = require('../models/db')


const getLigas = async (req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM ligas')
        res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje: 'Error al optener las ligas'})
    }
}
const getLigasByid = async(req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM ligas WHERE id_liga = $1',
            [req.params.id])
        if(!result.rows[0]){
            return res.status(404).json({mensaje:'Liga no encontrada '})

        }
        res.json(result.rows[0])
        
    }catch(error){
        res.status(500).json({Mensaje:'Error al optenerla liga'})
    }
}
const createLiga= async (req, res)=>{
    try{
        const{nombre, fecha_inicio, fecha_fin, id_cliente}=req.body
        const result=await pool.query(
            'INSERT INTO ligas (nombre, fecha_inicio, fecha_fin, id_cliente) VALUES ($1,$2,$3,$4) RETURNING *',
            [nombre, fecha_inicio, fecha_fin, id_cliente]
        )
        res.status(201).json(result.rows[0])


    }catch(error){
        res.status(500).json({mensaje: 'Error al crear la liga'})
    }
}
const updateLiga = async(req , res)=>{
    try{
        const {id}= req.params
        const{nombre, fecha_inicio, fecha_fin, id_cliente}= req.body
        const result=await pool.query(
            'UPDATE ligas SET nombre =$1, fecha_inicio=$2,fecha_fin=$3, id_cliente=$4 WHERE id_liga= $5 RETURNING *',
            [nombre, fecha_inicio, fecha_fin, id_cliente, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'Error al actulizar liga'})
    }
}
const deleteLiga = async (req, res)=>{
    try{
        const {id} = req.params
        const result = await pool.query(
            'DELETE FROM ligas WHERE id_liga =$1',
            [id]
        )
        res.status(200).json({mensaje: 'Liga eliminada'})
    }catch(error){
        res.status(500).json({mensaje:'Liga no eliminada'})
    }
}

module.exports = {getLigas, getLigasByid, createLiga, updateLiga, deleteLiga}