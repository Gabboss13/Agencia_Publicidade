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
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>

                <NavLink to="/services" activeStyle>
                   Services
                </NavLink>

                <NavLink to="./Contact" activeStyle>
                    Contact Us
                </NavLink>

                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin" >Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
         </>
    );
};

export default Navbar;
