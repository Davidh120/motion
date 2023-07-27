import { useState } from 'react';
import './nav.scss'

const Nav = () => {
    const [BurgerMenu, setBurgerMenu] = useState(false);

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
                    <div className="home-icon" onClick={() => scrollToSection('home')}></div>
                </li>
                <li className="nav-link">
                    <div className={BurgerMenu ? 'burger-icon2' : 'burger-icon'} onClick={() => setBurgerMenu((prev) => !prev)}></div>
                    <div className={BurgerMenu ? 'burger-menu burger-menu-active' : 'burger-menu'}>
                            <img src="/src/assets/svg/Boton_toggle.svg" alt="phone" className='burger-menu-icon'/>
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