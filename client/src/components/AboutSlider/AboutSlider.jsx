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
            Вы можете быть уверены, что ваша проблема будет решена оперативно.
            Вопрос{' '}
            <b>по&nbsp;маркировке, 1С, ЕГАИС или технической поддержке</b>,
            просто оставьте заявку или позвоните по номеру, указанному на сайте.
          </p>
          <p className="second__slide">
            После сотрудничества вы не будете оставлены на произвол судьбы. Если
            у вас возникают какие-то вопросы, вы всегда можете связаться с нами,
            и мы <b>абсолютно бесплатно</b> проведем для вас консультацию.
          </p>
          <p className="second__slide">
            Наши клиенты отличаются друг от друга, размерами компании,
            процессами внутри организации, сферой деятельности и многим другим.
            Мы готовы подстраиваться под каждого клиента, чтобы вы были уверены,
            что <b>ваша проблема будет решена комплексно</b>.
          </p>
          <p className="second__slide">
            Комплексный подход позволяет выявить ключевые проблемы, которые
            препятствуют развитию вашего бизнеса. Обращаясь к нам, вы можете
            быть уверены, что{' '}
            <b>эти проблемы больше повторяться не&nbsp;будут</b>.
          </p>
          <p className="second__slide">
            По мнению наших клиентов, после сотрудничества с нами компания
            начинает <b>развиваться значительно быстрее</b>, а проблем
            становиться меньше. Оставьте заявку и убедитесь в этом сами.
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
