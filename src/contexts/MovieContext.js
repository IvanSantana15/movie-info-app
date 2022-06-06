import React,{ createContext } from "react";
import useApi from "../hooks/useApi";



const MovieContext = createContext();

const inicialData = {
    movies:["batman","the avengers","cars","superman","The Fast and the Furious"],
    series:["game of trone"]
}

const getCurrentInicialData = ()=>{
    let randow = Math.floor(Math.random()* inicialData["movies"].length)
    return inicialData.movies[randow]
}



export const MovieProvider = ({children})=>{

  

    const {movies, isLoading, errors, newRequest}= useApi(`http://www.omdbapi.com/?s=batman&apikey=a64bb1e4`);
  
    const data = {movies, isLoading, errors, newRequest};

    return(
        <MovieContext.Provider value={ data }>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext