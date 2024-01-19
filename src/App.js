import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailItems from './components/DetailItems'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
    
function App() {
  return (
    <div>
        <Router>
          <Navbar />
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path="/item/:itemId" Component={DetailItems} />
                <Route path='/cart' Component={Cart} />
            </Routes>
            <Footer />
        </Router>

    </div>
  )
}

export default App