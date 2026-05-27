const express = require('express') 
const pool = require ('./models/db')
const equiposRoutes = require('./routes/equipos')
const jugadoresRoutes = require('./routes/jugadores')
const ligasRoutes = require('./routes/ligas')
const clientesRoutes = require('./routes/clientes')
const arbitrosRoutes = require('./routes/arbitros')
const tarjetasRoutes = require('./routes/targetas')
const golesRoutes = require('./routes/goles')
const partidosRoutes = require('./routes/partidos')
const usuariosRoutes = require('./routes/usuarios')
const authRoutes = require('./routes/auth')
const cors = require('cors')



pool.query('SELECT NOW()',(err, res) =>{
if(err){
    console.log('Error al conectar a la base de datos ', err)
}else{
    console.log('base de datos conectada: ', res.rows[0] )
}
})

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())


app.get('/',(req, res)=>{
     res.send('bienbenido a futbolllano API ajajjaj')
})


app.use('/equipos', equiposRoutes)
app.use('/jugadores', jugadoresRoutes)
app.use('/ligas', ligasRoutes)
app.use('/clientes', clientesRoutes)
app.use('/arbitros', arbitrosRoutes)
app.use('/tarjetas', tarjetasRoutes)
app.use('/goles', golesRoutes)
app.use('/partidos', partidosRoutes)
app.use('/usuarios', usuariosRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

