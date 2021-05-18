import React from "react"

import Slider from "./Slider"

import "../styles/work.scss"

const Work = ({ content }) => {
    return (
        <div className="work">
            <Slider />
            <div className="content">
                <h1 className="content__header">{content.title}</h1>
                <h3 className="content__info">
                    <span className="content__info__line">{content.content[0]}</span>
                    <span className="content__info__line">{content.content[1]}</span>
                    <span className="content__info__line">{content.content[2]}</span>
                </h3>
                <a href="https://www.instagram.com/niteczkidaneczki/" target="_blank" rel="noreferrer">
                    <button className="content__contact">
                        {content.btn}
                    </button>
                </a>
             </div>
        </div>
    )
}

export default Work
