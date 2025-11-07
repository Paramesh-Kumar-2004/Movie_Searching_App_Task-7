import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { MoviesContext } from '../Components/ContextAPI'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'



const Movies = () => {

    const { movies } = useContext(MoviesContext)

    return (
        <div>

            <SearchBar />
            <Cards />

        </div>
    )
}

export default Movies