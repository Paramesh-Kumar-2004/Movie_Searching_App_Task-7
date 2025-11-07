import React, { useContext } from 'react'
import { MoviesContext } from './ContextAPI'

const Cards = () => {

    const { movies } = useContext(MoviesContext)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {movies.map((movie, index) => (
                    <div key={index} className="bg-white shadow p-2 rounded hover:shadow-md">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                            alt={movie.Title}
                            className="w-full h-64 object-cover rounded"
                        />
                        <h3 className="mt-2 font-bold">{movie.Title}</h3>
                        <p className="text-gray-500 text-sm">{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards