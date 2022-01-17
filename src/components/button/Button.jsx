import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, to, children, ...restProps }) => {
    const Component = to ? Link : 'button';
  
    return (
      <Component
        {...restProps}
        onClick={onClick}
        to={to}
      >
        {children}
      </Component>
    )
  }
  
  
  export default Button;