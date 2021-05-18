import React from "react"

import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import {Link} from 'react-scroll'

import "../styles/sidebar.scss"

const Sidebar = ({ isSidebar, handleSidebar, handleLanguage, isPolish, content }) => {
    return (
        <div className={isSidebar ? "sidebar sidebar-active" : "sidebar"}>
            {
                isSidebar ?
                    <ChevronDoubleLeftIcon onClick={handleSidebar} className="sidebar-trigger" />
                :
                    <ChevronDoubleRightIcon onClick={handleSidebar} className="sidebar-trigger" />
            }

            <header className="main-header">
                <h1 className="main-header__title">
                    <a href="https://www.instagram.com/niteczkidaneczki/" target="_blank" rel="noreferrer" className="main-header__title-link">NDaneczki.</a>
                </h1>
            </header>
            <nav className="main-nav">
                <ul className="main-nav__menu">
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="home" spy={true} smooth={true} onClick={handleSidebar}>{content[0]}</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="about" spy={true} smooth={true} onClick={handleSidebar}>{content[1]}</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="work" spy={true} smooth={true} onClick={handleSidebar}>{content[2]}</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="contact" spy={true} smooth={true} onClick={handleSidebar}>{content[3]}</Link>
                    </span></li>
                </ul>
            </nav>
            <div className="toggle-section">
                <span className={isPolish ? "lang lang-active" : "lang"}>PL</span>
                <input type="checkbox" className="toggle-btn" onClick={handleLanguage} checked={!isPolish}></input>
                <span className={!isPolish ? "lang lang-active" : "lang"}>ENG</span>
            </div>
            <div className="copyright">
                <a href="https://github.com/ajiiz" target="_blank" rel="noreferrer" className="copyright-link">
                    © 2021 ajiiz.piotrwrobel
                </a>
            </div>
        </div>
    )
}

export default Sidebar
