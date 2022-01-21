import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #3F2B3C;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  border-radius: 0 0  10px 10px ;
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #EDDF4A;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #EDDF4A;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
//Botao
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #3F2B3C;
  padding: 10px 22px;
  color: #EDDF4A;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EDDF4A;
    color: #010606;
  }
`;