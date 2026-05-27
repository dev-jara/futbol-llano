import { useState, useEffect } from 'react'
import { getEquipos } from '../services/equiposService'


function Equipos() {
    const [equipos, setEquipos] = useState([])

    useEffect(() => {
        getEquipos().then(data => setEquipos(data))
        }, [])

    return (
    <div>
        <h1>Equipos</h1>
        {equipos.map(equipo => (
            <div key={equipo.id_equipo}>
                <p>{equipo.nombre}</p>
            </div>
        ))}
    </div>
)
}

export default Equipos