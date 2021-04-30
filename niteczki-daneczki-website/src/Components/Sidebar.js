import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header className="header">
                <h1 className="header__title">
                    niteczeki daneczki
                </h1>
            </header>
            <nav className="nav">
                <div className="nav__container">
                    <ul className="nav__container__menu">
                        <li>o mnie</li>
                        <li>prace</li>
                        <li>galeria</li>
                        <li>kontakt</li>
                    </ul>
                </div>
            </nav>
            <span className="copyright">
                ©
                <a href="https://github.com/ajiiz" className="copyright__link">
                    ajiiz.piotrwrobel
                </a>
            </span>
        </div>
    )
}

export default Sidebar
