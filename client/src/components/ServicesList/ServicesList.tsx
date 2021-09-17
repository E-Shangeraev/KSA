import React, { FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ServicesItem from '../Service/Service'

interface IService {
  title: string
  text: string
  image: string
}

const ServicesList: FC = () => {
  const [services, setServices] = useState<IService[]>([])

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(() => setServices(prev => prev.slice(0)))
  }, [])

  return (
    <ul className="services__list">
      {services.length > 0 &&
        services.map(service => (
          <ServicesItem
            key={uuidv4()}
            icon={service.image}
            name={service.title}
            description={service.text}
          />
        ))}
    </ul>
  )
}

export default ServicesList
