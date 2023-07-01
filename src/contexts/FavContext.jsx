import { createContext, useState } from "react";




export const FavContext = createContext()

const ARREGLO_KEY = "arreglo_key"

export function FavProvider(props){
    const [favoritos, setFavoritos] = useState(localStorage.getItem(ARREGLO_KEY)? JSON.parse(localStorage.getItem(ARREGLO_KEY)): [] )

    function agregarFavoritos(nuevoFav){
        console.log("nuevo fav",nuevoFav)
        console.log("agregandoa favoritos")
        setFavoritos([...favoritos,nuevoFav])
        const newFavs = [...favoritos,nuevoFav]
        setFavoritos(newFavs)
        localStorage.setItem(ARREGLO_KEY,JSON.stringify(newFavs))
    }
    function eliminarFavoritos(){
        console.log("reseteando favoritos")
        setFavoritos([])
        localStorage.setItem(ARREGLO_KEY,"")
    }

    const exposedValue = {
        favoritos,
        agregarFavoritos,
        eliminarFavoritos
    }

    return(
        <FavContext.Provider value= {exposedValue} >
            {props.children}
        </FavContext.Provider>
    )

} 

export default FavProvider