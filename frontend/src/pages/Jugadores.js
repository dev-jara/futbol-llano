import { useState, useEffect } from "react";
import { getJugadores } from '../services/jugadoresService'



function Jugadores(){
    const [jugadores, setJugadores] = useState([])

    useEffect(() => {
        getJugadores().then(data => setJugadores(data))
        }, [])

    return (
        <div>
        <h1>Jugadores</h1>
        {jugadores.map(jugadores => (
            <div key={jugadores.id_jugador}>
                <p>{jugadores.nombre}</p>
            </div>
        ))}
    </div>
    )
}
export default Jugadores