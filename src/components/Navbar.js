 import React,{useState} from 'react';
 import {link} from 'react-router-dom';
 
 function Navbar() {
    const {click, setClick} = useState{fasle};
   return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <link to='/' classname='navbar-logo'>
                    TRVL <i className='fab fa-typo3'/>
                </link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <link rel="stylesheet" href="" > 
                            home
                        </link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
   );
 }
 
 export default Navbar;