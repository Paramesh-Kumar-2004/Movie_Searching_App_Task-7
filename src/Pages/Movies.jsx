import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { MoviesContext } from '../Components/ContextAPI'
import SearchBar from '../Components/SearchBar'



const Movies = () => {

    const { movies } = useContext(MoviesContext)


    return (
        <div>

            <SearchBar />

            {movies.length > 0 && movies.map((ele, index) => {
                return (
                    <div key={index}>
                        <img src={ele.Poster} alt={ele.Title} />
                        <p>{ele.Poster}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Movies