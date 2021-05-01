import React from 'react'

import "../styles/sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header className="main-header">
                <h1 className="main-header__title">
                    <a href="https://www.instagram.com/niteczkidaneczki/" className="main-header__title-link">niteczki daneczki</a>
                </h1>
            </header>
            <nav className="main-nav">
                <ul className="main-nav__menu">
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">o mnie</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">prace</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">galeria</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">kontakt</span></li>
                </ul>
            </nav>
            <span className="copyright">
                ©
                <a href="https://github.com/ajiiz" className="copyright-link">
                    ajiiz.piotrwrobel
                </a>
            </span>
        </div>
    )
}

export default Sidebar
