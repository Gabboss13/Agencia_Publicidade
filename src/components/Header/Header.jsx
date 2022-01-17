import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css' //quando colocar importar o logo, colocar dentro da chaves com uma virgula

export default function Header () {
        return (
            <header className={style.mainHeader}>
                <ul>
                    <Link to="/produtos" className={style.head}>Projetos</Link>
                    <Link to="/cadastro" className={style.head}>Cadastro</Link>
                    {/* <Link to="/">
                        <Logo>Agencia Publicidade</Logo>
                    </Link> */}
                    <Link to="/signup" className={style.head}>Login</Link>
                    <Link to="/contato" className={style.head}>Contato</Link>
                 </ul>   
                </header>
        
        )
}