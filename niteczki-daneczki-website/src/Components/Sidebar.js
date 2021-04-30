import React from 'react'

import "../styles/sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header className="main-header">
                <h1 className="main-header__title">
                    niteczki daneczki
                </h1>
            </header>
            <nav className="main-nav">
                <div className="main-nav__container">
                    <ul className="main-nav__container__menu">
                        <li className="main-nav__container__menu-item">o mnie</li>
                        <li className="main-nav__container__menu-item">prace</li>
                        <li className="main-nav__container__menu-item">galeria</li>
                        <li className="main-nav__container__menu-item">kontakt</li>
                    </ul>
                </div>
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
