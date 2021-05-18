import React from "react"

import Flowers from "../images/undraw_flowers_vx06.svg"
import {Link} from 'react-scroll'
import { ArrowDownIcon } from "@heroicons/react/solid"

import "../styles/home.scss"

const Home = ({ content }) => {
    return (
        <div className="home">
            <div className="header">
                <div className="content">
                    <h1 className="content__header">{content.title}</h1>
                    <h3 className="content__info">
                        <span className="content__info__line">{content.content[0]}</span>
                        <span className="content__info__line">{content.content[1]}</span>
                        <span className="content__info__line">{content.content[2]}</span>
                    </h3>
                    <a href="https://www.facebook.com/danutawrobel1950" target="_blank" rel="noreferrer">
                        <button className="content__contact">
                        {content.btn}
                        </button>
                    </a>
                </div>
                <img className="header-image" src={Flowers} alt="header-flowers"></img>
            </div>
            <Link  to="about" spy={true} smooth={true}>
                <div className="scroll-down">
                    <p className="scroll-down__text">{content.arrowDown}</p>
                    <ArrowDownIcon className="icon" />
                </div>
            </Link>
        </div>
    )
}

export default Home
