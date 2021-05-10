import React, { useState } from "react"

import { SliderData } from "./SliderData"
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid"

import "../styles/slider.scss"

const Slider = () => {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    return (
        <div className="slider">
            <ArrowNarrowLeftIcon className="icon"/>
            <ArrowNarrowRightIcon className="icon"/>
            {SliderData.map((data, key) => {
                return (
                    <img className="slider__img" src={data.image} key={key} alt="gallery" />
                )
            })}
        </div>
    )
}

export default Slider
