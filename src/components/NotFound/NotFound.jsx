import React  from 'react'
import errorImg  from "../../assets/images/error.png"; 
import './style.css'

export default function NotFound() {
    return(
       <body>
            <div className="box1">
            <div className="box2">
            <h1> 404 </h1>
            <p> Você se perdeu? Essa página não existe! </p>
            <img src={errorImg} alt="erro" />
            <button>Voltar</button>
            </div>
            </div>
        </body>
    )
        
}

// erro 404
// 404 Você se perdeu? Essa página não existe
//gif