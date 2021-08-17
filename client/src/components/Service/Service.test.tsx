import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Service from './Service'

describe('Service', () => {
  beforeEach(() => {
    const props = {
      name: 'Name',
      description: 'Description',
    }
    render(<Service {...props} />)
  })

  it('should render component with props', () => {
    expect(screen.getByText(/Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Description/i)).toBeInTheDocument()
  })
  it('should handle toggle list item', () => {
    userEvent.click(screen.getByTestId('button'))
    expect(screen.getByText('Name')).toHaveClass('active')
  })
})
