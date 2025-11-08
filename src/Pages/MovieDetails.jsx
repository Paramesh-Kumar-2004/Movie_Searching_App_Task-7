import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../Components/ContextAPI";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
    const { movieDetail, loading } = useContext(MoviesContext);
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (movieDetail.length === 0) {
        return (
            <div className="align-middle ">
                <p className="text-center text-gray-500 mt-10 text-xl">
                    No Data Found
                </p>
                <div className="text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                    >
                        Back
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 flex flex-col md:flex-row justify-center gap-6 ">

            <img
                src={
                    movieDetail.Poster !== "N/A"
                        ? movieDetail.Poster
                        : "https://via.placeholder.com/300x450"
                }
                alt={movieDetail.Title}
                className="h-[80vh] w-full md:w-1/3 rounded-lg shadow-lg"
            />

            <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-2">{movieDetail.Title}</h1>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Year:</span> {movieDetail.Year}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Genre:</span> {movieDetail.Genre}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Director:</span> {movieDetail.Director}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Actors:</span> {movieDetail.Actors}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Language:</span> {movieDetail.Language}
                </p>
                <p className="text-gray-600 mb-4">
                    <span className="font-semibold">IMDb Rating:</span>{" "}
                    {movieDetail.imdbRating}
                </p>

                <h2 className="text-xl font-semibold mb-2">Plot</h2>
                <p className="text-gray-700">{movieDetail.Plot}</p>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default MovieDetails;
