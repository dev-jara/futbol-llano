const pool = require('../models/db')

const getJugadores = async (req, res)=>{
    try{
        const result=await pool.query('select * from jugadores')
        res.json(result.rows)

    }catch (error){
        res.status(500).json({mensaje: 'Error al optener jugadores'})
    }
}

const getjugadoresByid = async(req, res) =>{
    try{
        const result=await pool.query('select * from jugadores where id_jugador = $1 ', [req.params.id])
        if(!result.rows[0]){
            return res.status(404).json({mensaje:'jugador no encontrado'})
        }
        res.json(result.rows[0])
        
    }catch(error){
        res.status(500).json({Mensaje: 'Error al optener el jugador'})
    }
    
}

const createJugador = async(req, res)=>{
    try{
        const{nombre, fecha_nacimiento, numero_camiseta,
            posicion, pierna_habil, id_equipo
        } = req.body
        const result=await pool.query(
                'INSERT INTO jugadores (nombre, fecha_nacimiento, numero_camiseta,posicion, pierna_habil, id_equipo) values ($1,$2,$3,$4,$5,$6) RETURNING * ',
                [nombre, fecha_nacimiento, numero_camiseta, posicion, pierna_habil, id_equipo ]
                                        
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje: 'Error al crear jugador'})

    }
}
const updateJugador = async(req, res)=>{
    try{
        const { id } = req.params
        const{nombre, fecha_nacimiento, numero_camiseta,
                posicion, pierna_habil, id_equipo
        } = req.body
        const result=await pool.query(
            'UPDATE jugadores SET nombre =$1, fecha_nacimiento =$2, numero_camiseta =$3, posicion=$4, pierna_habil=$5, id_equipo=$6  WHERE id_jugador = $7 RETURNING * ',
            [nombre, fecha_nacimiento, numero_camiseta, posicion, pierna_habil, id_equipo, id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje: 'Error al actulizar jugador'})

    }
}
const deleteJugador = async (req, res)=>{
    try{
        const {id} = req.params
        const result=await pool.query(
            'DELETE FROM jugadores WHERE id_jugador =$1',
            [id]
        )
        res.status(200).json({mensaje: 'Jugador eliminado correctamente'})

    }catch(error){
        res.status(500).json({mensaje: 'Error al eliminar el jugador'})

    }
}

module.exports = {getJugadores, getjugadoresByid, createJugador, updateJugador, deleteJugador }