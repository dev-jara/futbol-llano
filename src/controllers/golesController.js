const pool = require('../models/db')

const getGoles = async (req, res)=>{
    try{
        const result= await pool.query('SELECT * FROM goles')
        res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje: 'Goles no encontrados'})

    }
}
const getGolesByid = async (req, res)=>{
    try{
        const result = await pool.query('SELECT * FROM goles WHERE id_gol = $1',
            [req.params.id])
            if(!result.rows[0]){
                return  res.status(404).json({mensaje:'gol no encontrado'})
            }
            res.json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'no se logro optener gol'})

    }
}
const createGol= async (req, res)=> {
    try{
        const {minuto, id_equipo, id_partido, id_jugador}=req.body
        const result= await pool.query(
            'INSERT INTO goles (minuto, id_equipo, id_partido, id_jugador) VALUES ($1,$2,$3,$4) RETURNING *',
            [minuto, id_equipo, id_partido, id_jugador]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'Gol no creado'})

    }
}
const updateGol = async (req, res)=>{
    try{
        const {id}=req.params
        const {minuto, id_equipo, id_partido, id_jugador}=req.body
        const result = await pool.query(
            'UPDATE goles SET minuto=$1, id_equipo=$2, id_partido=$3, id_jugador=$4 WHERE id_gol=$5 RETURNING *',
            [minuto, id_equipo, id_partido, id_jugador, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
            res.status(500).json({mensaje:'No se actulizo el gol'})
    }
}
const deleteGol = async (req, res)=>{
    try{
        const {id}=require.params
        const result = await pool.query(
            'DELETE FROM goles WHERE id_gol = $1',
            [id]
        )
        res.status(200).json({mensaje:'gol eliminado'})


    }catch(error){
        res.status(500).json({mensaje: 'Gol No, eliminado'})

    }
}

module.exports={getGoles, getGolesByid, createGol, updateGol, deleteGol}