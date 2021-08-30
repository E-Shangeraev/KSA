import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import Portal from '../Portal'
import Button from '../Button/Button'
import './Modal.scss'

interface ModalProps {
  btnText?: string
  btnColor?: string
  btnOutlined?: boolean
  containerClass?: string
  withButton?: boolean
  active?: boolean
  callback?: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = React.memo(
  ({
    btnText = 'Открыть',
    btnColor,
    btnOutlined = false,
    children,
    containerClass,
    withButton = true,
    active = false,
    callback,
  }) => {
    const modalRef = useRef(null)
    const [open, setOpen] = useState<boolean>(active)

    const handleClose = (): void => {
      setOpen(false)
      if (callback) {
        callback()
      }
    }
    const handleOpen = (): void => setOpen(true)

    const handleOutsideClick = useCallback(
      e => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (path[0] === modalRef.current) {
          handleClose()
        }
      },
      [open],
    )

    useEffect(() => {
      if (open) {
        document.addEventListener('click', handleOutsideClick)
        document.body.style.paddingRight = `${
          window.innerWidth - document.body.scrollWidth
        }px`
        document.body.style.overflow = 'hidden'
      } else {
        document.removeEventListener('click', handleOutsideClick)
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }, [open])

    useEffect(() => {
      setOpen(active)
    }, [active])

    return (
      <>
        {withButton && (
          <Button color={btnColor} onClick={handleOpen} outlined={btnOutlined}>
            {btnText}
          </Button>
        )}
        <Portal>
          <Transition
            nodeRef={modalRef}
            in={open}
            timeout={500}
            mountOnEnter
            unmountOnExit>
            {state => (
              <div className="modal" ref={modalRef}>
                <div
                  className={`modal__container ${
                    containerClass || 'modal__container--default'
                  } ${state}`}>
                  <button
                    type="button"
                    className="modal__close"
                    onClick={handleClose}
                    data-testid="modal-close">
                    X
                  </button>
                  {children}
                </div>
              </div>
            )}
          </Transition>
        </Portal>
      </>
    )
  },
)

export default Modal
