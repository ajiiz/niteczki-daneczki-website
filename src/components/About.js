import React from "react"

import Work from "../images/undraw_Playful_cat_rchv.svg"
import Send from "../images/undraw_Gift_box_re_vau4.svg"
import Review from "../images/undraw_reviews_lp8w.svg"

import "../styles/about.scss"

const About = () => {
    return (
        <div className="about">
            <ul className="about-list">
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Work} alt="about-work"></img>
                    <h2 className="about-list__item-header">Praca</h2>
                    <p className="about-list__item-content">Szybko i dokładnie wykonuję szydełkowe zlecenia.</p>
                </li>
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Send} alt="about-send"></img>
                    <h2 className="about-list__item-header">Cena i wysłanie</h2>
                    <p className="about-list__item-content">Cena zależna od projektu jest do ustalenia. Wysyłam paczki w każde zakątki świata.</p>
                </li>
                <li className="about-list__item">
                    <img className="about-list__item-img" src={Review} alt="about-review"></img>
                    <h2 className="about-list__item-header">Ocena</h2>
                    <p className="about-list__item-content">Posiadam wiele zadowolonych klientek z całego świata.</p>
                </li>
            </ul>
        </div>
    )
}

export default About
