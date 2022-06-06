import { StyledHeader, Logo, StyledSearch } from "../styles/StyledHeader"
import { FaSearch, FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";
import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import Autocomplete from "./Autocomplete";
import useDebounce from "../hooks/useDebounce";


const Header = () => {
    const { newRequest } = useContext(MovieContext)
    const [isOpenSearchBar, setIsOpenSearchBar] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const inputRef = useRef()
    const debounce = useDebounce()


    const getNewsMovies = (e) => {
        e.preventDefault()

        if (inputRef.current.value != "") {
            

            debounce(() => {
                setIsTyping(true)
                newRequest(`http://www.omdbapi.com/?s=${inputRef.current.value}&apikey=a64bb1e4`)
            }, 500)

        }

    

    }

    const resetInput = () => {
        inputRef.current.value = "";
    }

    return (
        <StyledHeader>
            <Logo>
                <h2>Movie</h2>
                <span>info</span>
                <span>app</span>
            </Logo>

            <FaSearch onClick={() => setIsOpenSearchBar(true)} />
            <FaBars />
            {
                isOpenSearchBar &&
                <StyledSearch>
                    <div>
                        <FaArrowLeft onClick={() => setIsOpenSearchBar(false)} />
                        <input
                            ref={inputRef}
                            type="text"
                            name="movie"
                            autoComplete="off"
                            placeholder="Buscar una pelicula"
                            onChange={(e) => getNewsMovies(e)}
                        />
                        <FaTimes onClick={() => resetInput()} />
                        <FaSearch onClick={(e) => getNewsMovies(e)} />
                    </div>
                    {/* {
                        isTyping &&
                        // <Autocomplete inputRef={inputRef} typing={setIsTyping} />

                    } */}

                </StyledSearch>

            }

        </StyledHeader>
    )
}

export default Header