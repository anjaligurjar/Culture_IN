import React from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./pages/Home"
import Sign_up from "./pages/Sign_up"
import Login from "./pages/Login"
import {Blogs} from "./blogs/Blogs"
import Contact from "./components/Contact"
import Nature from "./pages/Homenav/Nature"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./Css/App.css"



export default function App() {


  
  return (
    
    <div>
      <Header />
    
      <Router>
        <Navbar />
        <Routes>
          <Route excat path="/Contact" element={<Contact />} />
          <Route excat path="/About" element={<About />} />
          <Route excat path="/Blogs" element={<Blogs/>} />
          <Route excat path="/Home" element={<Home />} />
          <Route excat path="/Login" element={<Login />} />
          <Route excat path="/Sign_up" element={<Sign_up />} />
          <Route excat path="/Home/Nature" element={<Nature />} />
        
        </Routes>
      </Router>

      <Footer></Footer>

    </div>
  )
}
