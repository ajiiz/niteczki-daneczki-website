import React from "react"

import Work from "../images/undraw_Playful_cat_rchv.svg"
import Send from "../images/undraw_Gift_box_re_vau4.svg"
import Review from "../images/undraw_reviews_lp8w.svg"

import "../styles/about.scss"

const About = ({ content }) => {
    return (
        <div className="about">
            <ul className="about-list">
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Work} alt="about-work"></img>
                    <h2 className="about-list__item-header">{content.list[0][0]}</h2>
                    <p className="about-list__item-content">{content.list[0][1]}</p>
                </li>
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Send} alt="about-send"></img>
                    <h2 className="about-list__item-header">{content.list[1][0]}</h2>
                    <p className="about-list__item-content">{content.list[1][1]}</p>
                </li>
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Review} alt="about-review"></img>
                    <h2 className="about-list__item-header">{content.list[2][0]}</h2>
                    <p className="about-list__item-content">{content.list[2][1]}</p>
                </li>
            </ul>
        </div>
    )
}

export default About
