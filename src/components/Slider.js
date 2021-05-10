import React from "react"

import { SliderData } from "./SliderData"

import "../styles/slider.scss"

const Slider = () => {
    return (
        <div className="slider">
            {SliderData.map((data, key) => {
                return (
                    <img src={data.image} key={key} alt="gallery" />
                )
            })}
        </div>
    )
}

export default Slider
