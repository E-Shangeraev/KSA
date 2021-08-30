import React, { FC } from 'react'
import classNames from 'classnames'
import './Title.scss'

const Title: FC<{ aura?: boolean; noIndent?: boolean }> = ({
  children,
  aura,
  noIndent,
}) => (
  <h2
    className={classNames('title', {
      'title--aura': aura,
      'title--no-indent': noIndent,
    })}>
    {children}
  </h2>
)

export default Title
