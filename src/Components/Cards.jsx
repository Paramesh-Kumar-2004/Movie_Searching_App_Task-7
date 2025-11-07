import React, { useContext, useEffect } from "react";
import { MoviesContext } from "./ContextAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cards = () => {

    const navigate = useNavigate()

    const { movies, loading, page, setPage, setMovieDetail } = useContext(MoviesContext);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    async function HandleMoreDetail(data) {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=747591dd`)
            setMovieDetail(response.data || [])
            navigate("/moviedetails")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div key={index} className="bg-white shadow p-2 rounded hover:shadow-md">
                            <img
                                src={
                                    movie.Poster !== "N/A"
                                        ? movie.Poster
                                        : "https://via.placeholder.com/150"
                                }
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h3 className="mt-2 font-bold">{movie.Title}</h3>
                            <p className="text-gray-500 text-sm">{movie.Year}</p>
                            <p className="text-center hover:cursor-pointer font-bold text-black-900 text-sm" onClick={() => HandleMoreDetail(movie)}>More Details</p>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-center text-gray-500 mt-10 text-xl">
                            No Data Found
                        </p>
                    </div>
                )}
            </div>

            {movies.length > 0 && (
                <div className="flex justify-center items-center mt-6 gap-4">


                    <button
                        onClick={() => setPage(1)}
                        className="px-4 py-2 rounded-lg text-white bg-blue-900 hover:bg-blue-700"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page <= 1}
                        className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Back
                    </button>

                    <span className="text-lg font-bold text-black">
                        Page {page}
                    </span>

                    <button
                        onClick={() => setPage(page + 1)}
                        className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cards;
