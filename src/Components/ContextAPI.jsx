import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const MoviesContext = createContext();

const ContextAPI = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useState("s=Captain+America")

    const apiKey = "apikey=747591dd";
    const baseURL = `https://www.omdbapi.com/?`;

    useEffect(() => {
        fetchData()
    }, [searchParams])

    async function fetchData() {
        try {
            const response = await axios.get(`${baseURL}${searchParams}&${apiKey}`)
            console.log(response.data.Search)
            setMovies(response.data.Search || [])
        } catch (error) {
            console.log(error)
            setMovies([])
        }
    }


    return (
        <MoviesContext.Provider value={{ movies, setMovies, apiKey, baseURL, searchParams, setSearchParams }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default ContextAPI;
