import React, { FC } from 'react'
import classNames from 'classnames'
import './Title.scss'

const Title: FC<{ aura?: boolean }> = ({ children, aura }) => (
  <h2 className={classNames('title', { 'title--aura': aura })}>{children}</h2>
)

export default Title
