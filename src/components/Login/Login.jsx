import React from "react";
import { Link } from 'react-router-dom'
import "./Login.css"

export default () =>{
  return (
    <div className="page">
    <div className="container-login">
      <div className="left">
        <div className="login">Login</div>
      </div>
      <div className="right">
        <div className="form">
          <label for="email">Email</label>
          <input type="email" id="email" />
          <label for="password">Password</label>
          <input type="password" id="password" />
          <input  className="submit"  type= "submit" value="Enviar"/>
        </div>
      </div>
    </div>
  </div>
  
  )

}