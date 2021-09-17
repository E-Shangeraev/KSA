/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react'
import Slick from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import { Markup } from 'interweave'
import classNames from 'classnames'
import SliderButton from '../SliderButton/SliderButton'

import './AboutSlider.scss'

const AboutSlider = () => {
  const firstSliderRef = useRef(null)
  const secondSliderRef = useRef(null)
  const [active, setActive] = useState(0)
  const [slides, setSlides] = useState([])

  useEffect(() => {
    fetch('/api/about')
      .then(response => response.json())
      .then(data => setSlides(data))
      .catch(() => setSlides(prev => prev.slice(0)))
  }, [])

  const next = () => {
    if (firstSliderRef.current !== null && secondSliderRef.current !== null) {
      firstSliderRef.current.slickNext()
      secondSliderRef.current.slickNext()
    }
  }
  const prev = () => {
    firstSliderRef.current.slickPrev()
    secondSliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    swipe: false,
    beforeChange: (currentSlide, nextSlide) => setActive(nextSlide),
  }

  const handleActive = value => {
    firstSliderRef.current.slickGoTo(value)
    secondSliderRef.current.slickGoTo(value)
  }

  return (
    <div className="about-slider">
      {slides.length > 0 && (
        <>
          <Slick className="first" ref={firstSliderRef} {...settings}>
            {slides.map(slide => (
              <img key={uuidv4()} src={slide.image} alt={slide.title} />
            ))}
          </Slick>
          <div className="about-slider__bottom">
            <Slick className="second" ref={secondSliderRef} {...settings} fade>
              {slides.map(slide => (
                <div key={uuidv4()} className="second__slide">
                  <Markup content={slide.text} />
                </div>
              ))}
            </Slick>
            <div className="about-slider__buttons">
              <SliderButton previous onClick={prev} />
              <SliderButton next onClick={next} />
            </div>
          </div>
          <ul className="about-slider__switchers">
            {slides.map((slide, index) => (
              <li key={uuidv4()}>
                <button
                  className={classNames({ active: active === index })}
                  type="button"
                  onClick={() => handleActive(index)}>
                  {slide.title}
                </button>
              </li>
            ))}
            <li />
          </ul>
        </>
      )}
    </div>
  )
}

export default AboutSlider
