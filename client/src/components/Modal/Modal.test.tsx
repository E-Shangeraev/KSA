import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalFeedback from './ModalFeedback'
import Modal from './Modal'

describe('ModalFeedback', () => {
  let updateProps: (...args: string[]) => void

  beforeEach(() => {
    const { rerender } = render(<ModalFeedback title="Title" />)
    updateProps = rerender
  })

  it('should render component with props', () => {
    const props = {
      title: 'Title',
      text: 'Text',
    }
    updateProps(<ModalFeedback {...props} />)
    expect(screen.getByText(/Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
  })
  it('should render component without props', () => {
    expect(screen.queryByText(/Title/i)).toBeInTheDocument()
    expect(screen.queryByText(/Text/i)).toBeNull()
  })
  it('should show error message after submit with empty fields', async () => {
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findAllByTestId('error')).toHaveLength(3)
    expect(await screen.findByTestId('error-checkbox')).toHaveClass('error')
  })
  it('should render success message after submit', async () => {
    userEvent.type(screen.getByLabelText(/Имя/i), 'John')
    userEvent.type(screen.getByLabelText(/Телефон/i), '888888888888')
    userEvent.type(screen.getByLabelText(/E-mail/i), 'john.dee@someemail.com')
    userEvent.click(screen.getByRole('checkbox'))
    userEvent.click(screen.getByRole('button'))
    expect(
      await screen.findByText(/Мы свяжемся с вами в ближайшее время/i),
    ).toBeVisible()
  })
})

describe('Modal', () => {
  it('should render button which open modal', () => {
    render(
      <Modal>
        <div>Modal test</div>
      </Modal>,
    )
    expect(screen.getByText('Открыть')).toBeInTheDocument()
  })
  it('should handle open modal on button click', () => {
    render(
      <Modal>
        <div>Modal test</div>
      </Modal>,
    )
    userEvent.click(screen.getByText('Открыть'))
    expect(screen.queryByText(/Modal test/i)).toBeInTheDocument()
  })
  // it('should handle close modal on close button click', () => {
  //   render(
  //     <Modal active>
  //       <div>Modal test</div>
  //     </Modal>,
  //   )
  //   userEvent.click(screen.getByTestId('modal-close'))
  //   screen.debug()
  //   expect(screen.queryByText(/Modal test/i)).not.toBeInTheDocument()
  // })
  it('should be unmounted', () => {
    const { unmount } = render(
      <Modal active>
        <div>Modal test</div>
      </Modal>,
    )
    expect(screen.getByText(/Modal test/i)).toBeInTheDocument()
    unmount()
    expect(screen.queryByText(/Modal test/i)).not.toBeInTheDocument()
  })
})
