import './App.css'
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { FooterContainers } from './Containers/footer';
import Products from "./components/Products/Products";
import Contact from "./components/Contact/contact";
import Sign from "./components/Login/Login";
import Form from './components/Form/Form'
import NotFound from './components/NotFound/NotFound.jsx'
import Clientes from './components/Cliente/Cliente';



export default class App extends Component{
  render() {
    return (

          <div className="App">
            <Router>
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/sign" element={<Sign/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/*"element={<NotFound />} />
                <Route path = '/clientes' element={<Clientes />} />

                </Routes>
            </Router>
            <FooterContainers />
        </div>

     
    );
  }
}
