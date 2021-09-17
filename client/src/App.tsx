import React, { useEffect, useState } from 'react'
import ym from 'react-yandex-metrika'
import Title from './components/Title/Title'
import AboutSlider from './components/AboutSlider/AboutSlider'
import ServicesList from './components/ServicesList/ServicesList'
import Feedback from './components/Feedback/Feedback'
import Modal from './components/Modal/Modal'
import ModalFeedback from './components/Modal/ModalFeedback'
import logo from './assets/img/logo.svg'
import icon1 from './assets/img/icons/1.svg'
import icon2 from './assets/img/icons/2.svg'
import icon3 from './assets/img/icons/3.svg'
// import partnerLogo1 from './assets/img/partner-logo-1.png'
// import partnerLogo2 from './assets/img/partner-logo-2.png'
import footerLogo from './assets/img/footer-logo.svg'
import vk from './assets/img/icons/vk.svg'
import inst from './assets/img/icons/inst.svg'
import youtube from './assets/img/icons/youtube.svg'
import whatsapp from './assets/img/icons/whatsapp.svg'
import telegram from './assets/img/icons/telegram.svg'

interface IContacts {
  address: string
  inn: string
  mail: {
    title: string
    url: string
  }
  socials: {
    vk: string
    instagram: string
    youTube: string
    whatsApp: string
    telegram: string
  }
  phone: string
  workTime: string
}

function App(): JSX.Element {
  const [contacts, setContacts] = useState<IContacts | null>(null)

  useEffect(() => {
    fetch('/api/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(() => setContacts(null))
  }, [])

  if (contacts) {
    return (
      <div className="App">
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип КСА" />
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#1">Услуги</a>
              </li>
              <li>
                <a href="#2">Сотрудничество</a>
              </li>
              <li>
                <a href="#3">О нас</a>
              </li>
              <li>
                <a href="#4">Задать вопрос</a>
              </li>
            </ul>
          </nav>
          {contacts.phone && (
            <a
              className="header__phone"
              href={`tel:${contacts.phone}`}
              onClick={() => ym('reachGoal', 'zvonok')}>
              {contacts.phone}
            </a>
          )}
          <Modal btnText="Получить консультацию" btnOutlined>
            <ModalFeedback
              title="КСА на связи"
              text="Оставьте свои контактные данные
              и мы обязательно свяжемся с вами"
            />
          </Modal>
        </header>
        <main>
          <h1 className="visually-hidden">Комплексные системы автоматизации</h1>
          <section className="promo">
            <div className="wrapper">
              <div className="promo__container">
                <div>
                  <Title>
                    <span>
                      Комплексная помощь <b>малому</b>
                    </span>
                    <span>
                      <b>бизнесу</b>. Взаимодействие
                    </span>
                    <span>с государственными системами</span>
                    <small>(ЕГАИС, ФНС, Маркировка, Меркурий)</small>
                  </Title>
                  <div className="promo__bottom">
                    <Modal btnText="Нужна помощь">
                      <ModalFeedback
                        title="КСА на связи"
                        text="Оставьте свои контактные данные
                    и мы обязательно свяжемся с вами"
                      />
                    </Modal>
                    <p>
                      Богатый опыт и&nbsp;навыки
                      <br />
                      в&nbsp;сфере автоматизации бизнеса,
                      <br />
                      маркировки товаров, ЕГАИС
                    </p>
                  </div>
                </div>
                <div className="promo__picture" />
              </div>
            </div>
          </section>
          <section className="services" id="1">
            <div className="wrapper">
              <Title aura>
                <span>Услуги, которые </span>
                <span>предоставляет наша</span>
                <span>компания</span>
              </Title>
              <ServicesList />
              <div className="how-to" id="2">
                <div className="how-to__container">
                  <h3 className="subtitle">Получить помощь легко</h3>
                  <ul className="how-to__steps">
                    <li>
                      <img src={icon1} alt="Поиск в интернете" />
                      <p>Оставить заявку на нашем сайте, заполнив форму</p>
                    </li>
                    <li>
                      <img src={icon2} alt="Менеджер, отвечающий на вопросы" />
                      <p>Дождаться звонка менеджера и обсудить вашу проблему</p>
                    </li>
                    <li>
                      <img src={icon3} alt="Договор о сотрудничестве" />
                      <p>Заключить договор и начать сотрудничество</p>
                    </li>
                  </ul>
                  <Modal btnText="Оставить заявку">
                    <ModalFeedback
                      title="КСА на связи"
                      text="Оставьте свои контактные данные
                    и мы обязательно свяжемся с вами"
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </section>
          <section className="about" id="3">
            <div className="wrapper">
              <Title aura>
                <span>Всё, что вам нужно </span>
                <span>
                  знать о <b>нашей компании</b>
                </span>
                <span>в одном месте</span>
              </Title>
              <AboutSlider />
            </div>
          </section>
          {/* <section className="partners" id="3">
          <div className="wrapper">
            <Title aura>
              <span>
                <b>Наши партнеры,</b>
              </span>
              <span>которые помогают</span>
              <span>нам развиваться</span>
            </Title>
            <ul className="partners__list">
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={partnerLogo1} alt="Партнер 1" />
                  <p>
                    Небольшой текст о партнере небольшой текст о партнере
                    небольшой текст о партнере небольшой текст о партнере{' '}
                  </p>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={partnerLogo2} alt="Партнер 2" />
                  <p>
                    Небольшой текст о партнере небольшой текст о партнере
                    небольшой текст о партнере небольшой текст о партнере{' '}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section> */}
          <Feedback id="4" />
        </main>
        <footer className="footer">
          <div className="wrapper">
            <div className="footer__container">
              <div>
                <nav className="footer__nav">
                  <ul>
                    <li>
                      <a href="#1">Наши услуги</a>
                    </li>
                    <li>
                      <a href="#2">Сотрудничество</a>
                    </li>
                    <li>
                      <a href="#3">О компании</a>
                    </li>
                    <li>
                      <a href="#4">Оставить заявку</a>
                    </li>
                  </ul>
                </nav>
                <img
                  className="footer__logo"
                  src={footerLogo}
                  alt="Логотип КСА"
                />
              </div>
              <div>
                {contacts && (
                  <>
                    {contacts.inn && (
                      <span className="footer__inn">{contacts.inn}</span>
                    )}
                    {contacts.address && (
                      <span className="footer__address">
                        {contacts.address} <br />
                        <a
                          href="tel:+7 (904) 645-11-91"
                          onClick={() => ym('reachGoal', 'zvonok')}>
                          {contacts.phone && (
                            <>
                              <span>тел: </span>
                              {contacts.phone}
                            </>
                          )}
                        </a>
                        {contacts.workTime}
                      </span>
                    )}
                  </>
                )}
                <p className="footer__policy">
                  <span>Все права защищены.</span>
                  <a
                    // eslint-disable-next-line max-len
                    href="/Политика-в-отношении-обработки-персональных-данных.pdf"
                    target="_blank"
                    rel="noreferrer">
                    Политика конфиденциальности
                  </a>
                </p>
              </div>
              <div>
                {contacts && contacts.mail && (
                  <p className="footer__client">
                    <span>{contacts.mail.title}</span>
                    <a href={`mailto:${contacts.mail.url}`}>
                      {contacts.mail.url}
                    </a>
                  </p>
                )}
                {contacts && contacts.socials && (
                  <ul className="footer__socials">
                    {contacts.socials.vk && (
                      <li>
                        <a
                          href={contacts.socials.vk}
                          target="_blank"
                          rel="noreferrer">
                          <img src={vk} alt="ВКонтакте" />
                        </a>
                      </li>
                    )}
                    {contacts.socials.instagram && (
                      <li>
                        <a
                          href={contacts.socials.instagram}
                          target="_blank"
                          rel="noreferrer">
                          <img src={inst} alt="Instagram" />
                        </a>
                      </li>
                    )}
                    {contacts.socials.youTube && (
                      <li>
                        <a
                          href={contacts.socials.youTube}
                          target="_blank"
                          rel="noreferrer">
                          <img src={youtube} alt="YouTube" />
                        </a>
                      </li>
                    )}
                    {contacts.socials.whatsApp && (
                      <li>
                        <a
                          href={contacts.socials.whatsApp}
                          target="_blank"
                          rel="noreferrer">
                          <img src={whatsapp} alt="WhatsApp" />
                        </a>
                      </li>
                    )}
                    {contacts.socials.telegram && (
                      <li>
                        <a
                          href={contacts.socials.telegram}
                          target="_blank"
                          rel="noreferrer">
                          <img src={telegram} alt="Telegram" />
                        </a>
                      </li>
                    )}
                  </ul>
                )}
                <p className="footer__made-by">
                  <span>©2021</span>
                  <a href="http://mygang.ru" target="_blank" rel="noreferrer">
                    Made by Gang
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  return <div />
}

export default App
