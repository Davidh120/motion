/**
 * @fileoverview This file contains the nav section of the application
 * @author David Heredia
 */

import { useState } from 'react';
import './nav.scss'
import Phone from '../../assets/img/small_phone.png';

const Nav = () => {
    const [BurgerMenu, setBurgerMenu] = useState(false);

    // Function to smoothly scroll to a specified section based on its 'id'.
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="nav-content">
            <ul className="nav-list">
                <li className="nav-link">
                    <div className="home-icon"></div>
                </li>
                <li className="nav-link">
                    <div className={BurgerMenu ? 'burger-icon2' : 'burger-icon'} onClick={() => setBurgerMenu((prev) => !prev)}></div>
                    <div className={BurgerMenu ? 'burger-menu burger-menu-active' : 'burger-menu'}>
                            <img src={Phone} alt="phone" className='burger-menu-icon'/>
                            <p>Somos Nuestras APPS</p>
                        </div>
                </li>
                <li className="nav-link">
                    <div className="reload-icon" onClick={() => scrollToSection('home')}></div>
                </li>
            </ul>
        </div>
    )
}

export default Nav