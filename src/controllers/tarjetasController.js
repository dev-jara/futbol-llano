const pool = require('../models/db')

const getTarjetas =async (req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM tarjetas')
        res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje:'no se obtuvo ningun regitro de tarjetas'})

    }
}
const getTarjetasByid =async (req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM tarjetas WHERE id_tarjeta =$1',
            [req.params.id])
            if(!result.rows[0]){
                return res.status(404).json({mensaje:'tarjeta no encontrada'})
            }
           res.json(result.rows[0])

    }catch(error){
        res.status(500).json({Mensaje:'No se logro obterner targeta'})
   
    }
}
const createTarjeta = async (req, res)=>{
    try{
        const{tipo, minuto, id_jugador, id_partido}=req.body
        const result=await pool.query(
            'INSERT INTO tarjetas(tipo, minuto, id_jugador, id_partido) VALUES ($1,$2,$3,$4)RETURNING *',
            [tipo, minuto, id_jugador, id_partido]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'tarjeta no creada'})
    }
}
const updateTarjeta = async(req, res)=>{
    try{
        const {id}=req.params
        const {tipo, minuto, id_jugador, id_partido}=req.body
        const result=await pool.query(
            'UPDATE tarjetas SET tipo=$1, minuto=$2, id_jugador=$3, id_partido=$4 WHERE id_tarjeta=$5 RETURNING *',
            [tipo, minuto, id_jugador, id_partido, id]
        )
        res.status(200).json(result.rows[0])
        
    }catch(error){
        res.status(500).json({mensaje:'tarjeta no actualizada'})

    }
}
const deleteTarjeta = async(req, res)=>{
try{
    const {id}=req.params
    const result= await pool.query('DELETE FROM tarjetas WHERE id_tarjeta =$1',
        [id]
    )
    res.status(200).json({mensaje: 'Tarjeta eliminada'})

}catch(error){
    res.status(500).json({mensaje:'Tarjeta No, eliminada'})

}
}

module.exports ={getTarjetas, getTarjetasByid, createTarjeta,updateTarjeta, deleteTarjeta }