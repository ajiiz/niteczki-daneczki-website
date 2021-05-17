import React from "react"

import Slider from "./Slider"

import "../styles/work.scss"

const Work = () => {
    return (
        <div className="work" id="work">
            <Slider />
            <div className="content">
                <h1 className="content__header">galeria prac</h1>
                <h3 className="content__info">
                    <span className="content__info__line">Szukam wyzwań i z chęcią podejmę się nowych projektów.</span>
                    <span className="content__info__line">Wszystko wykonane jest starannie i własnoręcznie przeze mnie.</span>
                    <span className="content__info__line">Więcej moich prac można zobaczyć na instagramie.</span>
                </h3>
                <a href="https://www.instagram.com/niteczkidaneczki/" target="_blank" rel="noreferrer">
                    <button className="content__contact">
                        zobacz
                    </button>
                </a>
             </div>
        </div>
    )
}

export default Work
