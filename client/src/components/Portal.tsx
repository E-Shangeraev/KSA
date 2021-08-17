import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  id?: string
  children: React.ReactNode
}

const Portal: FC<PortalProps> = ({
  id = 'portal',
  children,
}): React.ReactElement<PortalProps> => {
  const [container] = useState<HTMLDivElement>(document.createElement('div'))

  container.id = id

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
