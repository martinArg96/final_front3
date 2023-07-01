import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'



//https://jsonplaceholder.typicode.com/users


//     const [loading, setloading] = useState(false)
//     const [image, setImage] = useState("")
//     const [error1, setError1] = useState(false)
//     const [datosTodos, setDatosTodos] = useState({})
//     async function fetchData(){
//         setloading(true)
//         let dataJson
//         try{
            
//             const fetchData = await fetch(`https://rickandmortyapi.com/api/character/?name=${user}`)
//             dataJson = await fetchData.json()
//             console.log(dataJson)
//         setData(dataJson.results[0].name)
//         setImage(dataJson.results[0].image)
//         setDatosTodos(dataJson.results[0])
//             setError1(false)
//         }
//         catch(err){
//             console.log(err)
//             setloading(false)
//             setError1(true)
//         }
//         finally{
//             setloading(false)
//         }
        
        
//         setloading(false)
        
//     }


//     useEffect(() => {
//         console.log("fetching data for", user)
//         fetchData(user)
     
    

   
      
//     }, [user])

export const Home = (props) => {
    const [data, setData] = useState()
    const [loading, setloading] = useState(false)
    const [error1, setError1] = useState(false)

    async function fetchData(){
                setloading(true)
                let dataJson
                try{
                    
                    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users`)
                    dataJson = await fetchData.json()
                    console.log(dataJson)
                    setData(dataJson)
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


  return (
    <div className='home' >
        <h2>home</h2>
        {   data? 
            data.map((personita) => {
                return<Card key={personita.id} name={personita.name} email={personita.email} id={personita.id}/>
            })
            : null
        }
        
    </div>

  )
}
