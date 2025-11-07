import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const ContextAPI = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useState("s=Captain+America");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = "apikey=747591dd";
    const baseURL = "https://www.omdbapi.com/?";

    useEffect(() => {
        fetchData();
    }, [searchParams, type]);

    async function fetchData() {
        try {
            setLoading(true);
            const url = `${baseURL}${searchParams}${type ? `&type=${type}` : ""}&${apiKey}`;
            const response = await axios.get(url);

            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
            setLoading(false);
        } catch (error) {
            console.error("API Error:", error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <MoviesContext.Provider
            value={{ movies, setMovies, apiKey, baseURL, searchParams, setSearchParams, type, setType, loading }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default ContextAPI;
