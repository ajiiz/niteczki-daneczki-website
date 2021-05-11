import React, { useState, useEffect } from "react"

import { SliderData } from "./SliderData"
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid"

import "../styles/slider.scss"

const Slider = () => {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
          }, 4000)

          return () => clearInterval(timer)
    })

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slider">
            <ArrowNarrowLeftIcon className="icon icon-left" onClick={prevSlide} />
            {SliderData.map((data, key) => {
                return (
                    <div
                        className={key === current ? "slide slide-active" : "slide"}
                        key={key}
                    >
                        {key === current && (
                            <img className="slider-img" src={data.image} key={key} alt="gallery" />
                        )}
                    </div>
                )
            })}
            <ArrowNarrowRightIcon className="icon icon-right" onClick={nextSlide} />
        </div>
    )
}

export default Slider
