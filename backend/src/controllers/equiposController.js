const pool = require('../models/db')


const getEquipos = async (req, res)=> {
    try{
        const result=await pool.query(' select * FROM equipos')
        res.json(result.rows)
    }catch (error){
        res.status(500).json({mensaje: 'Error al optener equipos'})
    }
}


const getequiposByid = async(req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM equipos WHERE id_equipo = $1',
            [req.params.id])
        if(!result.rows[0]){
            return res.status(404).json({mensaje: 'Equipo no encontrado'})
        }
        res.json(result.rows[0])

    }catch(error){
        res.status(500).json({Mensaje: 'Error al optener el equipo'})
    }
}

const createEquipo =async (req, res) =>{
    try{
        const{nombre, director_tecnico, id_liga} = req.body
        const result=await pool.query(
            'INSERT INTO equipos (nombre, director_tecnico, id_liga) VALUES ($1, $2, $3) RETURNING *',
            [nombre, director_tecnico, id_liga]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje: 'Error al crear el equipo'})
    }
}

const updateEquipo =async(req, res)=>{
    try{
        const {id} = req.params
        const{nombre, director_tecnico, id_liga} = req.body
        const result=await pool.query(
            'UPDATE equipos SET nombre =$1, director_tecnico= $2, id_liga=$3 WHERE id_equipo = $4 RETURNING * ',
            [nombre, director_tecnico, id_liga, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje: 'Error al actualizar equipo'})
    }
}

const deleteEquipo= async(req, res)=>{
    try{
        const {id} = req.params
        const result=await pool.query(
            'DELETE FROM equipos WHERE id_equipo =$1',
            [id]
        )
        res.status(200).json({mensaje: 'Equipo eliminado '})


    }catch(error){
        res.status(500).json({mensaje: 'Error al eliminar el jugador'})

    }
}


module.exports = {getEquipos, getequiposByid, createEquipo, updateEquipo, deleteEquipo}
  