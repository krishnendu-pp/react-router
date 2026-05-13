
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import Community from './pages/Community.jsx'
import Blog from './pages/Blog.jsx'
import Pricing from './pages/Pricing.jsx'

  
function App() {


  return (
    <>
  <BrowserRouter>
  <nav>
    <Link to="/">Home </Link>   <Link to="/Features">Features</Link>   <Link to="/Community">Community </Link>   <Link to="/Blog">Blog </Link>   <Link to="/Pricing">Pricimg</Link>
   
    
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/Community' element={<Community/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>

  

    
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
