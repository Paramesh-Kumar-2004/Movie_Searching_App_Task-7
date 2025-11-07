import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './Pages/Movies'
import ContextAPI from './Components/ContextAPI'



const App = () => {

  return (

    <BrowserRouter>
      <ContextAPI>

        <Routes>
          <Route path='/' element={<Movies />} />
        </Routes>

      </ContextAPI>
    </BrowserRouter>

  )
}

export default App