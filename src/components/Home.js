import React from "react"

import Flowers from "../images/undraw_flowers_vx06.svg"
import {Link} from 'react-scroll'
import { ArrowDownIcon } from "@heroicons/react/solid"

import "../styles/home.scss"

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="header">
                <div className="content">
                    <h1 className="content__header">szydełkowa pasja</h1>
                    <h3 className="content__info">
                        <span className="content__info__line">Łącze przyjemne z pożytecznym tworząc piękne rzeczy.</span>
                        <span className="content__info__line">Szydełkuję na zamówienie i jestem otwarta na propozycję.</span>
                        <span className="content__info__line">Gorąco zapraszam do kontaktu.</span>
                    </h3>
                    <a href="https://www.facebook.com/danutawrobel1950" target="_blank" rel="noreferrer">
                        <button className="content__contact">
                            kontakt
                        </button>
                    </a>
                </div>
                <img className="header-image" src={Flowers} alt="header-flowers"></img>
            </div>
            <Link  to="about" spy={true} smooth={true}>
                <div className="scroll-down">
                    <p className="scroll-down__text">dowiedz się więcej</p>
                    <ArrowDownIcon className="icon" />
                </div>
            </Link>
        </div>
    )
}

export default Home
