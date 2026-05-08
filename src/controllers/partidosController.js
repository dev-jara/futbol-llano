const pool = require('../models/db')


const getPartidos = async (req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM partidos')
            res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje:'Partidos no encotrados'})

    }
}

const getPartidosByid = async (req, res)=>{
    try{
        const result= await pool.query('SELECT * FROM partidos WHERE id_partido =$1',
            [req.params.id])
            if(!result.rows[0]){
                return res.status(400).json({mensaje:'Partido no encontrado'})
            }
            res.json(result.rows[0])

    }catch(error){
        res.status(500).json({Mensaje: 'Error al optener el partido'})
    }
}

const createPartido = async (req, res)=>{
    try{
        const{fecha, hora, cancha, id_liga, id_arbitro, id_equipo_local, id_equipo_visitante  }=req.body
        const result = await pool.query(
            'INSERT INTO partidos (fecha, hora, cancha, id_liga, id_arbitro, id_equipo_local, id_equipo_visitante) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
            [fecha, hora, cancha, id_liga, id_arbitro, id_equipo_local, id_equipo_visitante]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'Partido no creado'})
    }
}
const updatePartido = async (req, res)=>{
    try{
        const {id}= req.params
        const{fecha, hora, cancha, id_liga, id_arbitro, id_equipo_local, id_equipo_visitante  }=req.body
        const result=await pool.query(
            'UPDATE partidos SET fecha=$1, hora=$2, cancha=$3, id_liga=$4, id_arbitro=$5, id_equipo_local=$6, id_equipo_visitante=$7 WHERE id_partido=$8 RETURNING *',
            [fecha, hora, cancha, id_liga, id_arbitro, id_equipo_local, id_equipo_visitante, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
      
         res.status(500).json({mensaje:'Partido no actualizado'})
    }
}
const deletePartido = async (req, res)=>{
    try{
        const {id} = req.params
        const result = await pool.query(
            'DELETE FROM partidos WHERE id_partido =$1',
            [id]
        )
        res.status(200).json({mensaje:'Partido eliminado'})
    }catch(error){
        res.status(500).json({mensaje:'Partido No, eliminado'})
    }
}


module.exports ={getPartidos, getPartidosByid,createPartido, updatePartido, deletePartido}