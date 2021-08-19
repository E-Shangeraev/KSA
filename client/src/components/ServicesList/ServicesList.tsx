import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ServicesItem from '../Service/Service'

const servicesItems = [
  {
    name: 'Маркировка. Настройка и обучение',
    description: `Настраиваем маркировку от 0 и до ведения товароучета с
    клиентом. Для мелкой розницы, так и для крупных клиентов.`,
  },
  {
    name: 'Автоматизация бизнеса с 1С',
    description: `Внедрение программ товароучета в бизнесе.
    Автоматизация процессов. Внедрение бизнес-процессов.`,
  },
  {
    name: 'ЕГАИС',
    description: `Подключение, сопровождение, настройка, декларация.`,
  },
  {
    name: 'Сопровождение ПО 1С и техническая поддержка',
    description: `Наши специалисты оказывают полную поддержку продуктов 1С,
    решим оперативно все возникшие вопросы.`,
  },
  {
    name: 'Кассы(ККТ), Фискальные накопители 1.2(ФН) и торговое оборудование',
    description: `Вы можете заказать профессиональную установку и настройку
    касс, фискальных накопителей и торгового оборудования.
    Устанавливаем интеграцию с 1С.`,
  },
]

const ServicesList: FC = () => (
  <ul className="services__list">
    {servicesItems.map(item => (
      <ServicesItem
        key={uuidv4()}
        name={item.name}
        description={item.description}
      />
    ))}
  </ul>
)

export default ServicesList
