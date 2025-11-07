import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './Pages/Movies'
import ContextAPI from './Components/ContextAPI'
import MovieDetails from './Pages/MovieDetails'



const App = () => {

  return (

    <BrowserRouter>
      <ContextAPI>

        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/moviedetails' element={<MovieDetails />} />
        </Routes>

      </ContextAPI>
    </BrowserRouter>

  )
}

export default App