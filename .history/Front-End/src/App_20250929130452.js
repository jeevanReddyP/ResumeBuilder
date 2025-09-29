import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}>

      </Route>
    </Routes>
  )
}

export default App