const API_URL = 'http://localhost:3000'


export const getLigas= async ()=>{
    const reponse = await fetch(`${API_URL}/ligas`)
    return reponse.json()
}