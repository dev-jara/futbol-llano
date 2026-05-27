import {useState, useEffect} from "react";
import {getPartidos} from '../services/partidosServise'

function Partidos(){
    const[partidos, setPartidos] = useState([])

    useEffect(()=> {
        getPartidos().then(data => setPartidos(data))
    }, [])

    return (
        <div>
        <h1>Partidos</h1>
        {partidos.map(partidos => (
            <div key={partidos.id_partido}>
                <p>{partidos.cancha}</p>
            </div>
        ))}
    </div>
    )
}
export default Partidos