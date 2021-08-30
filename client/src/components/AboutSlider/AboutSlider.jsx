/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react'
import Slick from 'react-slick'
import classNames from 'classnames'
import SliderButton from '../SliderButton/SliderButton'
import './AboutSlider.scss'
import image1 from '../../assets/img/Slider/1.jpg'
import image2 from '../../assets/img/Slider/2.jpg'
import image3 from '../../assets/img/Slider/3.jpg'
import image4 from '../../assets/img/Slider/4.jpg'
import image5 from '../../assets/img/Slider/5.jpg'

export const switchers = [
  'Всегда на связи',
  'Бесплатные консультации',
  'Идем навстечу клиентам',
  'Решаем проблемы, а не симптомы',
  'С нами бизнес вести легче',
]

const AboutSlider = () => {
  const firstSliderRef = useRef(null)
  const secondSliderRef = useRef(null)
  const [active, setActive] = useState(0)

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
      <Slick className="first" ref={firstSliderRef} {...settings}>
        <img src={image1} alt="Всегда на связи" />
        <img src={image2} alt="Бесплатные консультации" />
        <img src={image3} alt="Идем навстечу клиентам" />
        <img src={image4} alt="Решаем проблемы, а не симптомы" />
        <img src={image5} alt="С нами бизнес вести легче" />
      </Slick>
      <div className="about-slider__bottom">
        <Slick className="second" ref={secondSliderRef} {...settings} fade>
          <p className="second__slide">
            Компания существует <b>для помощи малому бизнесу</b>. Изначально
            развивались как продавцы торгового оборудования. НО вышли на уровень
            помощи и взаимодействия малого бизнеса и властных структур. Помощь
            оказываем комплексную. Обычно без помощи никто не остается. за
            несколько лет скопился богатый опыт и навыки.
          </p>
          <p className="second__slide">
            <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit.
            Tempora accusamus placeat magnam dolores hic? Laborum ad
            exercitationem nemo error voluptates. Totam porro nobis labore illo?
            Facere beatae quam omnis eligendi?
          </p>
          <p className="second__slide">
            <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa! Natus, rerum illo aut eum, eveniet itaque
            autem quos explicabo enim dolore aliquid assumenda error voluptatem
            iste qui sunt?
          </p>
          <p className="second__slide">
            <b>Lorem</b> ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa! Natus, rerum?
          </p>
          <p className="second__slide">
            <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa!
          </p>
        </Slick>
        <div className="about-slider__buttons">
          <SliderButton previous onClick={prev} />
          <SliderButton next onClick={next} />
        </div>
      </div>
      <ul className="about-slider__switchers">
        {switchers.map((name, index) => (
          <li key={name}>
            <button
              className={classNames({ active: active === index })}
              type="button"
              onClick={() => handleActive(index)}>
              {name}
            </button>
          </li>
        ))}
        <li />
      </ul>
    </div>
  )
}

export default AboutSlider
