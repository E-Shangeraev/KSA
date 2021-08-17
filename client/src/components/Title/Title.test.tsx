import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('Title component', () => {
  it('should render Title component without props', () => {
    render(<Title>Test</Title>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('Test')
  })
  it('should render Title component with props', () => {
    render(<Title aura>Test</Title>)
    expect(screen.getByRole('heading')).toHaveClass('title--aura')
  })
})
