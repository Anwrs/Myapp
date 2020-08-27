import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
        <div className='header-nav'>
            <h2>MyApp Webshop</h2>
            <ul className='header-nav-list'>
                <a href="index.html"><li>Home</li></a>
                <a href="#?inprogress"><li><FontAwesomeIcon icon={faTags} size='xs' pull='left'  /> Shop</li></a>
            </ul>
        </div>
    </header>
  ); 
}

export default Header; 

