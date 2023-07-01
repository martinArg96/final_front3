import React, { useContext, useEffect, useState } from 'react'
import { FavContext } from '../contexts/FavContext'
import { Card } from '../components/Card'

export const Favoritos = (props) => {

    const [dataFav, setDataFav] = useState()
    const [loading, setloading] = useState(false)
    const [error1, setError1] = useState(false)

    async function fetchData(){
                setloading(true)
                let dataJson
                try{
                    
                    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users`)
                    dataJson = await fetchData.json()
                    console.log("data json",dataJson)
                    setDataFav(dataJson)
                    setError1(false)
                }
                catch(err){
                    console.log(err)
                    setloading(false)
                    setError1(true)
                }
                finally{
                    setloading(false)
                }
                
                
                setloading(false)
                
            }



        useEffect(() => {
        console.log("fetching data ")
        
        fetchData()
        
    }, [])


    const favoritos = useContext(FavContext)
    const arrayFavs = favoritos.favoritos
  return (
    <div>
        <h2>favoritos</h2>
        {
            arrayFavs.map((e)=>{
                
                return(
                    <div>
                    <p>id favorito: {e}</p>
                    
                    {
                        dataFav? 
                        <Card key={e} id={e} email={dataFav[e].email} name={dataFav[e].name}/> : 
                        <p>sin favoritos</p>
                    }
                    
                    </div>
                )
            })
        }
         
        <button onClick={()=> favoritos.eliminarFavoritos() } >reset favs</button>
    </div>

  )
}
