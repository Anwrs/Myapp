import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
       </div>
    );
}
 
export default Navigation;