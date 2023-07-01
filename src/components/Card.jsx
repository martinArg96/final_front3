import React, { useContext, useState } from 'react'
import {Route, Routes, useNavigate } from 'react-router-dom'
import { FavContext } from '../contexts/FavContext'


// const dentistaMock = {
//     nombre: "maria juana",
//     email: "email@email"
// }

export const Card = (props) => {
    const navigate = useNavigate()
    const [idPersona, setidPersona] = useState()
    const fav = useContext(FavContext)

  function handleClick(){
    console.log("click")
    // useNavigate(`/persona/${idPersona}`)
    setidPersona(props.id)
  }

  function handleFavorito(id){
    console.log(id)
    // useNavigate(`/persona/${idPersona}`)
    setidPersona(props.id)
    fav.agregarFavoritos(id)
  }


   

  return (
    <div  className='card'>
        <div > foto <img src="" alt="" /> </div>
        {/* <p>nombre: {dentistaMock.nombre}</p>
        <p>email: {dentistaMock.email}</p> */}
        <p>name: {props.name}</p>
        <p>email: {props.email}</p>
        <button onClick={()=>handleFavorito(props.id)}>agregar a favoritos</button>
        <button onClick={ handleClick} >ver detalles</button>
        
    </div>
  )
}
