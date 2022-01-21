import React  from 'react'
import { Link } from "react-router-dom";
import errorImg  from "../../assets/images/error.png"; 
import './style.css'

export default function NotFound() {
    return(
       <body className='body-notfound'>
            <div className="box1">
            <div className="box2">
            <h1 className='title-notfound'> 404 </h1>
            <p className='sub-notfound'> Você se perdeu? Essa página não existe! </p>
            <img className='img-notfound' src={errorImg} alt="erro" />
            <button className='btn-notfound'><Link to="/">Voltar</Link></button>
            </div>
            </div>
        </body>
    )
        
}