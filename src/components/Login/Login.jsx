import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default () => {
  return (
    <div className="page">
      <div className="container-login">
        <div className="left">
          <div className="login">Login</div>
        </div>
        <div className="right">
          <form className="form-login">
            <label for="email">Email</label>
            <input type="email" id="email" required />
            <label for="password">Password</label>
            <input type="password" id="password" required />
            <button className="submitsign"><Link to="/clientes">Enviar</Link>
            </button>
            <small className="forgot">
              Esqueceu a senha? clique<a href="/*">aqui!</a>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};
