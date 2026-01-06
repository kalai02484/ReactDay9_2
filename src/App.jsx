import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h2>Page Not Found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
