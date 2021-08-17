import React, { FC, useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import Modal from '../Modal/Modal'
import ModalFeedback from '../Modal/ModalFeedback'
import './Service.scss'

interface ServiceProps {
  name: string
  description: string
}

const Service: FC<ServiceProps> = ({ name, description }) => {
  const [toggleService, setToggleService] = useState<boolean>(false)
  const serviceRef = useRef<HTMLDivElement>(null)

  const onToggleService = () => {
    setToggleService(!toggleService)
  }

  if (serviceRef === null) return null

  useEffect(() => {
    if (toggleService && serviceRef.current) {
      serviceRef.current.style.maxHeight = `
      ${serviceRef.current.scrollHeight}px`
    } else if (serviceRef.current) {
      serviceRef.current.style.maxHeight = ''
    }
  }, [toggleService])

  return (
    <li className="service">
      <button
        type="button"
        className="service__name"
        onClick={onToggleService}
        data-testid="button">
        <span className={classNames({ active: toggleService })}>{name}</span>
        <div
          className={classNames('service__arrow', {
            'service__arrow--rotated': toggleService,
          })}>
          <span>Подробнее</span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M2.49996 0.416664L7.99996 5.91666L13.5 0.416664L15.3333 2.25L7.99996 9.58333L0.666626 2.25L2.49996 0.416664Z"
              fill="#47B199"
            />
          </svg>
        </div>
      </button>
      <div className="service__description" ref={serviceRef}>
        <p>{description}</p>
        <Modal btnText="Обратный звонок">
          <ModalFeedback
            title="Это модальное окно"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sint eius minima consequuntur suscipit quaerat incidunt."
          />
        </Modal>
      </div>
    </li>
  )
}

export default Service
