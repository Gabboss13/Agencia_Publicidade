import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Center from './components/Center/Center.jsx'
import Header from './components/Header/Header.jsx'
import Form from './components/Form/Form.jsx';
import NotFound from './components/NotFound/NotFound.jsx'
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Clientes from './components/Cliente/Cliente';


export default class App extends Component{
  render() {
    return (
      <div>
          <Router>
            <Header />
            <Routes>
                <Route path= "/" element= {
                    <Center> 
                        {/* <Logo /> */}
                   </Center>
                }/>
                <Route path= "/produtos" element={<Products />} />
                <Route path= "/cadastro" element={<Form />} />
                <Route path= "/signup" element={<Login />} />
                <Route path= "/contato" element ={<Contact /> } />
                <Route path="/*"element={<NotFound />} />
                <Route path = '/clientes' element={<Clientes />} />
            </Routes> 
          </Router>
          {/* <Footer /> */}
      </div>
     
    );
  }
}
