/* eslint-disable react/button-has-type */
import React, { FC } from 'react'
import classNames from 'classnames'
import './Button.scss'

interface ButtonProps {
  outlined?: boolean
  color?: string
  onClick?: () => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  outlined = false,
  color,
  children,
  onClick,
  disabled = false,
}) => (
  <button
    type="button"
    className={classNames('button', {
      'button--outlined': outlined,
      'button--secondary': color === 'secondary',
    })}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
)

export default Button
