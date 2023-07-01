import React, { useState } from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [error1, setError1] = useState(false)

    function handleChangeNombre(e){
        setNombre(e.target.value)
    }
    function handleChangeEmail(e){
        setEmail(e.target.value)
    }

    function handleSubmit(){
        if(!nombre || !email){
            setError1(true)
        } else {
            setError1(false)
        }
    }

  return (
    <div>
        <h2>contacto</h2>
        <form onSubmit={handleSubmit} action="">
            <input
             type="text" placeholder='Nombre completo'  value={nombre}
             onChange={handleChangeNombre}
             />
            <input onChange={handleChangeEmail} value={email} type="email" placeholder='Email' name="" id="" />
            <button type="submit">Enviar</button>
        </form>
        {
            error1 ? <div>Complete los campos correctamente</div> : undefined
        }
    </div>

  )
}
