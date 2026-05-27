const API_URL = 'http://localhost:3000'

export const getJugadores = async () =>{
    const reponse = await fetch(`${API_URL}/jugadores`)
    return reponse.json()
}