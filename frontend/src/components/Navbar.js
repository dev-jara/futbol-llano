import {Link, useNavigate} from 'react-router-dom'

function Navbar () {
    const navigate = useNavigate()

    const handleLogout = ()=> {
        localStorage.removeItem('token')
        navigate('/login')

    }


    return(
        <nav>
          <h2>FutolLlano</h2> 
            <Link to="/equipos">Equipos</Link>
            <Link to="/jugadores">Jugadores</Link>
            <Link to="/ligas">Ligas</Link>
            <Link to="/partidos">Partidos</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </nav> 
    )
}
export default Navbar