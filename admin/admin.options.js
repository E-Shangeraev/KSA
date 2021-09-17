const { default: AdminJS } = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

const { Admin, Services, Contacts, About } = require('./resourceOptions')

AdminJS.registerAdapter(AdminJSMongoose)

/** @type {import('adminjs').AdminJSOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
      },
      labels: {
        Admin: 'Администраторы',
        About: 'О нас',
        Service: 'Услуги',
        Contacts: 'Контактные данные',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        About: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            text: 'Текст',
            uploadedFile: 'Изображение',
          },
        },
        Service: {
          properties: {
            index: 'Порядковый номер',
            uploadedFile: 'Иконка',
            title: 'Заголовок',
            text: 'Текст',
          },
        },
        Contacts: {
          properties: {
            address: 'Адрес',
            phone: 'Номер телефона',
            mail: 'Почта для заявок',
            clientMail: 'Клиентский отдел',
            careerMail: 'Карьера в компании',
            workTime: 'Рабочее время',
            socials: 'Ссылки на соцсети',
            'socials.vk': 'ВКонтакте',
            'socials.instagram': 'Instagram',
            'socials.youTube': 'YouTube',
            'socials.whatsApp': 'WhatsApp',
            'socials.telegram': 'Telegram',
          },
        },
      },
    },
  },
  resources: [Admin, About, Services, Contacts],
  branding: {
    companyName: 'KSA78',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
