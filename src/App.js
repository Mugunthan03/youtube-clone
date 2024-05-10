import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Watch from './components/Watch'

const App = () => {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/watch' element={<Watch />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App