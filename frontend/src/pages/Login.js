import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authService'

function Login(){
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const data = await login(email, password)
        if(data.token){
            localStorage.setItem('token', data.token)
            navigate('/equipos')
        }else{
            alert(data.mensaje)
        }
    }


    return (
         <div>
           <input 
                type="email" 
                placeholder="Correo" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
           /> 
           <input 
                type="password" 
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
           <button onClick={handleLogin}>Entrar</button>

        </div>
    )

}
export default Login