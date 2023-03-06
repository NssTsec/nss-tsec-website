import React from 'react';
import './Navbar.css';
import logo from '../images/nss-logo.png';

const Navbar = () => {
  return (
    <>
        <div className='navbar-container'>
            {/* <div> */}

                <div className='navbar-logo-heading-container'>
                    <div className='navbar-logo'>{ logo }</div>
                    <div className='navbar-heading'></div>
                </div>


                <div className='navbar-feature-container'>
                    <div className='navbar-feature-list'>
                    <ul className='navbar-feature'>
                        <li>Admin</li>
                        <li>Events</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    </div>
                </div>

            {/* </div> */}
        </div>
    </>
  );
}

export default Navbar;