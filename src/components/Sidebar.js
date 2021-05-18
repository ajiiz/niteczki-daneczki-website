import React from "react"

import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import {Link} from 'react-scroll'

import "../styles/sidebar.scss"

const Sidebar = ({ isSidebar, handleSidebar }) => {
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
                        <Link  to="home" spy={true} smooth={true} onClick={handleSidebar}>dom</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="about" spy={true} smooth={true} onClick={handleSidebar}>o mnie</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="work" spy={true} smooth={true} onClick={handleSidebar}>prace</Link>
                    </span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">
                        <Link  to="contact" spy={true} smooth={true} onClick={handleSidebar}>kontakt</Link>
                    </span></li>
                </ul>
            </nav>
            <div className="toggle-lang">
                <span className="lang lang-active">PL</span>
                <input type="checkbox" className="toggle-btn"></input>
                <span className="lang lang-active">ENG</span>
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
