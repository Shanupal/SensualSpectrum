import react from 'react'
import{Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import USerlogin from './pages/UserLogin';
import USersignup from './pages/UserSignup';
import Captainlogin from './pages/CaptainLogin';
import Captainsignup from './pages/Captainsignup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/> 
          <Route path='/login' element={<USerlogin />}/>
        <Route path='/signup' element={<USersignup />}/> 
        <Route path='/captain-login' element={<Captainlogin />}/>
       <Route path='/captain-signup' element={<Captainsignup />}/>  
      </Routes>
    </div>
  )
}

export default App

