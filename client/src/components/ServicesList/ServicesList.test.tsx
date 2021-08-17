import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesList from './ServicesList'

describe('ServicesList', () => {
  it('should render li items', () => {
    render(<ServicesList />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
  })
})
