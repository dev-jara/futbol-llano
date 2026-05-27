const API_URL = 'http://localhost:3000'

export const getEquipos = async () =>{
    const reponse = await fetch(`${API_URL}/equipos`)
    return reponse.json()
}