import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css' //quando colocar importar o logo, colocar dentro da chaves com uma virgula

export default class Header extends Component {
    render() {
        return (
                <nav className={style.mainHeader}>
                    <Link to="/produtos">Projetos</Link>
                    <Link to="/cadastro">Cadastro</Link>
                    {/* <Link to="/">
                        <Logo>Agencia Publicidade</Logo>
                    </Link> */}
                    <Link to="/signup">Login</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
        
        )
    }
}