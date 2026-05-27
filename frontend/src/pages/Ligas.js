import {useState, useEffect} from "react";
import {getLigas} from '../services/ligasService'

function Ligas(){
    const [ligas, setLigas]= useState([])

    useEffect(()=> {
        getLigas().then(data => setLigas(data))
    }, [])

    return(
        <div>
        <h1>Ligas</h1>
        {ligas.map(ligas => (
            <div key={ligas.id_ligas}>
                <p>{ligas.nombre}</p>
            </div>
        ))}
    </div>
    )

}

export default Ligas