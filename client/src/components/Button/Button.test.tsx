import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button component', () => {
  it('should render without props', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Button')
  })
  it('should render with props', () => {
    render(<Button outlined>Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--outlined')
  })
  it('should call onClick method', () => {
    const mockCallback = jest.fn()
    render(<Button onClick={mockCallback}>Button</Button>)
    expect(mockCallback.mock.calls.length).toBe(0)
    userEvent.click(screen.getByRole('button'))
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
