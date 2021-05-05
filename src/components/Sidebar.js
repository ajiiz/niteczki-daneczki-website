import React from "react"

import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/solid'

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
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">o mnie</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">prace</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">galeria</span></li>
                    <li className="main-nav__menu-item"><span className="main-nav__menu-item-text">kontakt</span></li>
                </ul>
            </nav>
            <div className="copyright">
                <a href="https://github.com/ajiiz" target="_blank" rel="noreferrer" className="copyright-link">
                    © ajiiz.piotrwrobel
                </a>
            </div>
        </div>
    )
}

export default Sidebar
