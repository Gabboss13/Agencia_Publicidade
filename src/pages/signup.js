import React from "react";
import { Link } from 'react-router-dom';
import '../components/Login/Login.css';
const SignUp = () => {
    return (
        <div style={{

            

        }}>



            <div className="page">
                <div className="container-login">
                    <div className="left">
                        <div className="login">SIGA</div>
                    </div>
                    <div className="right">
                        <form className="form-login">
                            <label for="email">Email</label>
                            <input type="email" id="email" required />
                            <label for="password">Password</label>
                            <input type="password" id="password" required />
                            {/* <input  className="submit"  type= "submit" value="Enviar" /> */}
                            <button className="submit">Enviar</button>
                            <small>Esqueceu a senha, <a href="#">clique aqui!</a></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;