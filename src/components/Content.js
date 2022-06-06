import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import { StyledContent } from "../styles/StyledContent"
import Card from "./Card"


const Content = () => {

 const{movies, isLoading, errors}= useContext(MovieContext);

  console.log(movies)
  console.log(errors)

  return (
    <StyledContent>
   {
     movies?.Search?.map(movie=>(
       <Card key={movie.imdbID} movie={movie}/>
     ))
   }
   

    </StyledContent>
  )
}

export default Content