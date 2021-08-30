import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ServicesItem from '../Service/Service'
import icon1 from '../../assets/img/feature-1.svg'
import icon2 from '../../assets/img/feature-2.svg'
import icon3 from '../../assets/img/feature-3.svg'
import icon4 from '../../assets/img/feature-4.svg'
import icon5 from '../../assets/img/feature-5.svg'

const servicesItems = [
  {
    name: 'Маркировка. Настройка и обучение',
    description: `Мы можем настроить маркировку от маленького магазина
    до крупного опта. Обучение и сопровождение. Поддержка всех видов
    маркировки: табак, молоко и молочная продукция, вода, легкая
    промышленность, обувь, шины и лекарства. Мы готовы к грядущей
    маркировке пива и последующим нововведениям.
    `,
    icon: icon1,
  },
  {
    name: 'Автоматизация бизнеса с 1С',
    description: `Для тех, кто хочет автоматизировать свой бизнес на платформе
    1с. Внедрение и автоматизация процессов. Вы получаете полную прозрачность
    работы компании и выведение ее на новый уровень учета и эффективности.`,
    icon: icon2,
  },
  {
    name: 'ЕГАИС',
    description: `Вы получите профессиональную поддержку и сопровождение.
    Опыт работы с ЕГАИС с 2016 года. Знаем, как делать запросы в системе
    ЕГАИС и формировать декларации. Взаимодействие с ФСРАР.`,
    icon: icon3,
  },
  {
    name: 'Сопровождение ПО 1С и техническая поддержка',
    description: `Техническая поддержка программ 1С. Обновление, оперативное
    решение возникших проблем.
    `,
    icon: icon4,
  },
  {
    name: 'Кассы(ККТ), Фискальные накопители 1.2(ФН) и торговое оборудование',
    description: `Продажа и ремонт торгового оборудования. От фискального
    накопителя (ФН 1.2) до внедрения ТСД на крупных предприятиях. Кассы,
    сканеры, программное обеспечение для оборудования.`,
    icon: icon5,
  },
]

const ServicesList: FC = () => (
  <ul className="services__list">
    {servicesItems.map(item => (
      <ServicesItem
        key={uuidv4()}
        icon={item.icon}
        name={item.name}
        description={item.description}
      />
    ))}
  </ul>
)

export default ServicesList
