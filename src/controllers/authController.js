const pool = require('../models/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    try{
        const {email, password}=req.body
        const result= await pool.query('SELECT id_usuario, nombre, email, password, rol, id_cliente FROM usuarios WHERE email = $1',
            [email])
            if(!result.rows[0]){
                return res.status(404).json({mensaje:'Usuario no encontrado'})
            }
        const passwordValido = await bcrypt.compare(password, result.rows[0].password)
            if(!passwordValido){
                return res.status(401).json({mensaje: 'Contraseña incorrecta'})
            }
            
            const token = jwt.sign(
            { id: result.rows[0].id_usuario, rol: result.rows[0].rol },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
)

res.json({ token })

    }catch(error){

    }
    
}
module.exports = { login }