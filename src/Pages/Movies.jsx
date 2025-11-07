import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { MoviesContext } from '../Components/ContextAPI'



const Movies = () => {

    const { baseURL } = useContext(MoviesContext)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get(baseURL)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            Movies
        </div>
    )
}

export default Movies