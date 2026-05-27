const pool = require('../models/db')

const getClientes =async(req, res)=>{
    try{
        const result=await pool.query('SELECT * FROM clientes')
        res.json(result.rows)

    }catch(error){
        res.status(500).json({mensaje:'Clientes no encontrados'})
    }
}
const getClientesByid= async(req, res) =>{ 
    try{
        const result=await pool.query('SELECT * FROM clientes WHERE id_cliente = $1',
            [req.params.id])
            if(!result.rows[0]){
                return res.status(404).json({mensaje:'Cliente no encontrado'})
            }
            res.json(result.rows[0])

    }catch(error){
        res.status(500).json({Mensaje:'NO se logro optener el cliente'})

    }
}
const createCliente = async(req, res)=>{
    try{
        const{nombre, isactive, fecha_inicio, fecha_termino, telefono, correo, direccion}=req.body
        const result=await pool.query(
            'INSERT INTO clientes (nombre, isactive, fecha_inicio, fecha_termino, telefono, correo, direccion) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
            [nombre, isactive, fecha_inicio, fecha_termino, telefono, correo, direccion]
        )
        res.status(201).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje: 'NO se creo el cliente'})

    }
}
const updateCliente = async (req, res)=>{
    try{
        const {id}= req.params
        const{nombre, isactive, fecha_inicio, fecha_termino, telefono, correo, direccion }=req.body
        const result =await pool.query(
            'UPDATE clientes SET nombre=$1, isactive=$2, fecha_inicio=$3, fecha_termino=$4, telefono=$5, correo=$6, direccion=$7 WHERE id_cliente=$8 RETURNING *',
            [nombre, isactive, fecha_inicio, fecha_termino, telefono, correo, direccion,  id]
        )
        res.status(200).json(result.rows[0])

    }catch(error){
        res.status(500).json({mensaje:'No se actualizo el cliente'})

    }
}
const deleteCliente = async(req, res)=>{
    try{
        const {id} = req.params
        const result = await pool.query(
            'DELETE FROM Clientes WHERE id_cliente =$1',
            [id]
        )
        res.status(200).json({mensaje:'Cliente eliminado'})

    }catch(error){
        res.status(500).json({mensaje:'Cliente No, eliminado'})

    }
}

module.exports ={getClientes, getClientesByid, createCliente, updateCliente, deleteCliente}