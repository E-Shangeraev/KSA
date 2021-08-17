import React, { FC } from 'react'
import './SliderButton.scss'

interface SliderButtonProps {
  previous?: boolean
  next?: boolean
  onClick: () => void
}

const SliderButton: FC<SliderButtonProps> = ({
  previous = false,
  next = false,
  onClick,
}) => {
  if (previous) {
    return (
      <button
        type="button"
        className="slider-button slider-button--prev"
        onClick={onClick}>
        Предыдущий слайд
        <svg
          width="12"
          height="18"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M11.5555 2.33331L4.88888 8.99997L11.5555 15.6666L9.33332 17.8889L0.444431 8.99997L9.33332 0.111084L11.5555 2.33331Z"
            fill="white"
          />
        </svg>
      </button>
    )
  }
  if (next) {
    return (
      <button
        type="button"
        className="slider-button slider-button--next"
        onClick={onClick}>
        Следующий слайд
        <svg
          width="12"
          height="18"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M0.555664 15.6667L7.22233 9.00003L0.555663 2.33336L2.77789 0.111139L11.6668 9.00003L2.77789 17.8889L0.555664 15.6667Z"
            fill="white"
          />
        </svg>
      </button>
    )
  }
  return null
}

export default SliderButton
