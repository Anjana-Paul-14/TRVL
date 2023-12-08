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
                <div className="menu-icon">
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
            </div>
        </nav>
    </>
   );
 }
 
 export default Navbar;