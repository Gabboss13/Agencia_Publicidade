import './App.css'
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import { FooterContainers } from './Containers/footer';
import About from "./pages/about";
import Services from "./pages/service";
import Contact from "./pages/contact";
import Sign from "./pages/sign";
import SignUp from "./pages/signup";


export default class App extends Component{
  render() {
    return (
    
          <div className="App">
            <Router>
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/sign-up" element={<Sign/>}/>
                <Route path="/signin" element={<SignUp/>}/>
                </Routes>
            </Router>
            <FooterContainers />
        </div>
     
    );
  }
}
