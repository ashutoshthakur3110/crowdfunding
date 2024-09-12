import React from 'react'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router ,Route, Routes, } from 'react-router-dom'
import Register from './components/Register'
const App = () => {
  return (

      <Router>
         <Routes>
        <Route path='/' element={<LandingPage/>}  />
         <Route path='/register' element={<Register/>} />
            
      </Routes>
      </Router>
  )
}

export default App
   