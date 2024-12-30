
import './App.css'
import Home from './Homepage'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';//first router tha import pananaum because athu tha start panurom
function App() {
  return (
    <div>
    <Router>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
          <img
            src="https://images.pexels.com/photos/1888403/pexels-photo-1888403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avi"
          />
            </Link>
          
          <h1 className="logo-text">Avi</h1>
            
        </div>

        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   
       <footer  style={{textAlign:"center",background:"#8e9a9f",color:"white"}}>
  
                    <p>&copy; 2024 Avanthikha. All rights reserved.</p>
              
            </footer>
    </div>
  )
}

export default App
