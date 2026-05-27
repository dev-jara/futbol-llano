const API_URL = 'http://localhost:3000'

export const getPartidos = async () =>{
    const reponse = await fetch(`${API_URL}/partidos`)
    return reponse.json()
}