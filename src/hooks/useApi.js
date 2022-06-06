
import { useState, useEffect} from 'react'

const useApi = (url) => {
    const[movies, setMovies]= useState(null)
    const[isLoading, setIsLoading]= useState(false)
    const[errors, setErrors]= useState(null)

    const fetchData= async(url)=>{
        const resquest = await fetch(url)
        const response = await resquest.json();
        return response

    }

    const newRequest =async (url) =>{
        try {
            setIsLoading(true)
            const data = await fetchData(url)
           
            if(JSON.parse(data.Response.toLowerCase())){
                setMovies(data)
            }
            if(!JSON.parse(data.Response.toLowerCase())){
                throw Error("No se encontro la pelicula")
            }
           
        } catch (error) {
            setErrors(error)
            
        }finally{
          setIsLoading(false)
        }
    }


    useEffect( () => {

      
        newRequest(url)
    }, [url])
    
  return {movies, isLoading, errors, newRequest}

  
    

}

export default useApi