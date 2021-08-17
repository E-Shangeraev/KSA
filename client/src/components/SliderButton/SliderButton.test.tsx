import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SliderButton from './SliderButton'

describe('SliderButton', () => {
  it('should render previous button', () => {
    render(<SliderButton previous onClick={() => null} />)
    expect(screen.getByText(/Предыдущий слайд/i)).toBeInTheDocument()
    expect(screen.queryByText(/Следующий слайд/i)).not.toBeInTheDocument()
  })
  it('should render next button', () => {
    render(<SliderButton next onClick={() => null} />)
    expect(screen.getByText(/Следующий слайд/i)).toBeInTheDocument()
    expect(screen.queryByText(/Предыдущий слайд/i)).not.toBeInTheDocument()
  })
  it('should render null', () => {
    const { container } = render(<SliderButton onClick={() => null} />)
    expect(container.firstChild).toBeNull()
  })
  it('should calls onClick function', () => {
    const func = jest.fn()
    render(<SliderButton next onClick={func} />)
    userEvent.click(screen.getByRole('button'))
    expect(func).toHaveBeenCalled()
  })
})
