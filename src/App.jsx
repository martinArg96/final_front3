import { useContext, useState } from 'react'
import ThemeProvider, { ThemeContext } from './contexts/ThemeContext'
import { useNavigate, Link, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Formulario } from './Pages/Formulario'
import { Persona } from './Pages/Persona'
import { Favoritos } from './Pages/Favoritos'


function App() {
  const navigate = useNavigate()
  const tema = useContext(ThemeContext)

  return (
    <div className={tema.tema}>
      <div>
        <nav>
          <h1>Clinica App</h1>
          <button onClick={tema.toggleTheme} >tema togle</button>
        
          <div><Link className='link' to="/home">Home</Link></div>
          <div><Link className='link' to="/formulario">Formulario</Link></div>
          <div><Link className='link' to="/favoritos">Favoritos</Link></div>
        </nav>
        
      </div>
        <Routes>
        <Route path='/home/*' element={<Home/>} />
        <Route path='/' element={<Home/>}  />
        <Route path='/formulario' element={<Formulario/>} />
        <Route path='/home/:id' element={<Persona/>} />
        <Route path='/favoritos' element={<Favoritos/>} />

        </Routes>
      </div>   
    
  )
}

export default App
