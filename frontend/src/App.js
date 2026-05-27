import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Equipos from './pages/Equipos'
import Jugadores from './pages/Jugadores'
import Ligas from './pages/Ligas'
import Partidos from './pages/Partidos'
import Login from './pages/Login'
import RutaProtegida from './components/RutaProtegida'


function App() {
  return (
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/equipos" element={ <RutaProtegida> <Equipos/> </RutaProtegida>}  /> 
          <Route path="/jugadores" element={ <RutaProtegida> <Jugadores/> </RutaProtegida> }  /> 
          <Route path="/ligas" element={ <RutaProtegida><Ligas/></RutaProtegida> } /> 
          <Route path="/partidos" element={ <RutaProtegida><Partidos/></RutaProtegida> } />
          <Route path="/login" element={<Login />} />
         </Routes>
        </BrowserRouter>
    
    
  )
}
  
export default App;
