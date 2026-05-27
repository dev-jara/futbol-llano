const pool = require('../models/db')

const getArbitros=async(req, res)=> {
    try{
        const result=await pool.query('SELECT * FROM arbitros')
        res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje:'No se logro optener los abitros'})

    }
}
const getArbitrosByid =async(req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM arbitros WHERE id_arbitro = $1',
           [req.params.id])
           if(!result.rows[0]){
            return res.status(404).json({mensaje:'Arbitro no encontrado'})
           }
           res.json(result.rows[0])

    }catch(error){
res.status(500).json({mensaje: 'no se logro optener arbitro'})
    }
}
const createArbitro =async (req, res)=>{
    try{
        const {nombre}=req.body
        const result=await pool.query(
            'INSERT INTO arbitros (nombre) VALUES ($1) RETURNING *',
            [nombre]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'Arbitro no creado'})

    }
}
const updateArbitro = async (req, res)=>{
    try{
        const {id}=req.params
        const{nombre}=req.body
        const result= await pool.query('UPDATE arbitros SET nombre=$1 WHERE id_arbitro=$2 RETURNING *',
            [nombre, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'No se actualizo el arbitro'})
    }
}
const deleteArbitro = async(req,res)=>{
    try{
        const {id}=req.params
        const result = await pool.query(
            'DELETE FROM Arbitros WHERE id_arbitro =$1',
            [id]
        )
        res.status(200).json({mensaje:'arbitro eliminado'})

    }catch(error){
        res.status(500).json({mensaje:'arbitro No, eliminado'})

    }
}

module.exports ={getArbitros, getArbitrosByid, createArbitro, updateArbitro, deleteArbitro}