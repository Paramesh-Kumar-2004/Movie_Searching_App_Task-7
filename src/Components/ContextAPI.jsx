import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

const ContextAPI = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0)
    const apiKey = "apikey=747591dd";
    const baseURL = `https://www.omdbapi.com/?s=Batman&${apiKey}`;

    return (
        <MoviesContext.Provider value={{ movies, setMovies, apiKey, baseURL, count, setCount }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default ContextAPI;
