import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { MoviesContext } from '../Components/ContextAPI'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'



const Movies = () => {

    const { movies, loading } = useContext(MoviesContext)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (movies.length === 0) {
        return <p className="text-center text-gray-500 mt-10 text-xl">No Data Found</p>;
    }

    return (
        <div>

            <SearchBar />
            <Cards />

        </div>
    )
}

export default Movies