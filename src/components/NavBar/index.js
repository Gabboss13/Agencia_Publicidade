import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink}  from './NavbarElements.js';
//<img src='' alt=''/>   
        
const Navbar = () => {
    return( 
        <>
        <Nav>
          <NavLink to="/" activeStyle>
          <h1>Siga</h1>
          </NavLink>

            <Bars />
          
            <NavMenu>
            
                <NavLink to="/products" activeStyle>
                   Produtos
                </NavLink>

                <NavLink to="./contact" activeStyle>
                    Fale com a gente!
                </NavLink>

                <NavLink to="/form" activeStyle>
                    Cadastre-se
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign" >Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
         </>
    );
};

export default Navbar;
