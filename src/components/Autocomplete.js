
import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import useDebounce from "../hooks/useDebounce";
import {StyledAutocomplete, StyledMovieName} from "../styles/StyledAutocomplete";


const Autocomplete = ({inputRef,typing}) => {
  const {movies,newRequest} = useContext(MovieContext)
  const debounce = useDebounce()

const handlerClick =(title)=>{
  inputRef.current.value = title
 
    newRequest(`http://www.omdbapi.com/?s=${inputRef.current.value}&apikey=a64bb1e4`)

  typing(false)
}
  return (
    <StyledAutocomplete>
        {JSON.parse(movies.Response.toLowerCase())?
          movies?.Search?.map(movie=><StyledMovieName
              key={movie.imdbID} 
              onClick={()=> handlerClick(movie.Title)}>
               <img src={movie.Poster}>
               </img><p>{movie.Title}</p>
            </StyledMovieName>)
          :<p>Sin resultados</p>
        }
    </StyledAutocomplete>
  )
}

export default Autocomplete