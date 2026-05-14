
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
    <div className='one'>
      <img src="/images/logo.svg" alt="" />
      <h3>Nexcent</h3>
    <Link to="/">Home </Link><Link to="/Features">Features</Link><Link to="/Community">Community </Link><Link to="/Blog">Blog </Link><Link to="/Pricing">Pricing</Link> <br /><br />
   
    <button>Register Now</button>
      
</div>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/Community' element={<Community/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>


    
    </Routes>
    
      <footer>
     
 
   <div className='Fifth'>
      <div className='five'>
        <img src="/images/logo.svg" alt="" />
       <br /> <h2>Nexcent</h2>
        <p> Copyright © 2020 Landify UI Kit. <br />All rights reserved</p>
    
      </div>
     <div className='five'>
      <h3>Company</h3>
      <p>About us <br /> Blog <br /> Contact us <br /> Pricing <br/> Testimonials</p>
      </div> 
      <div className='five'>
        <h3>Support</h3>
        <p>Help center <br /> Terms of service <br /> Legal <br /> Privacy policy <br /> Status</p>

      </div>
      <div className='five'>
        <h3>Stay up to date</h3>
         <input  placeholder='Enter your email' />

      </div>
      </div>

  
    </footer>
  </BrowserRouter>


  </>
  )
}

export default App
