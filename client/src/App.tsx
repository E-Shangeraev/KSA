import React from 'react'
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
import partnerLogo1 from './assets/img/partner-logo-1.png'
import partnerLogo2 from './assets/img/partner-logo-2.png'
import footerLogo from './assets/img/footer-logo.svg'
import vk from './assets/img/icons/vk.svg'
import inst from './assets/img/icons/inst.svg'
import youtube from './assets/img/icons/youtube.svg'
import whatsapp from './assets/img/icons/whatsapp.svg'

function App(): JSX.Element {
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
              <a href="#2">О нас</a>
            </li>
            <li>
              <a href="#3">Партнеры</a>
            </li>
          </ul>
        </nav>
        <a className="header__phone" href="tel:+7 (904) 645-11-91">
          +7 (904) 645-11-91
        </a>
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
                  <small>(ЕГАИС, ФНС, Маркировки, Меркурия)</small>
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
            <div className="how-to">
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
        <section className="about" id="2">
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
        <section className="partners" id="3">
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
        </section>
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
                    <a href="#2">О компании</a>
                  </li>
                  <li>
                    <a href="#3">Партнеры</a>
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
              <span className="footer__inn">ООО “КСА” ИНН 3455001204</span>
              <span className="footer__address">
                Офис в г. Москва <br />
                ул. Пушкина 31а, <br />
                оф. 501,
                <a href="tel:+7 (904) 645-11-91">
                  <span>тел: </span>+7 (904) 645-11-91
                </a>{' '}
                пн-пт с 9:00 до 18:00
              </span>
              <p className="footer__policy">
                <span>Все права защищены.</span>
                <a href="/" target="_blank">
                  Политика конфиденциальности
                </a>
              </p>
            </div>
            <div>
              <p className="footer__client">
                <span>Клиентский отдел</span>
                <a href="mailto:info@ksa.com">info@ksa.com</a>
              </p>
              <p className="footer__career">
                <span>Карьера в компании</span>
                <a href="/" target="_blank">
                  hr@ksa.com
                </a>
              </p>
              <ul className="footer__socials">
                <li>
                  <a href="/" target="_blank">
                    <img src={vk} alt="ВКонтакте" />
                  </a>
                </li>
                <li>
                  <a
                    // eslint-disable-next-line max-len
                    href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Finstagram.
                    com%2Fit_park_sakhalin%3Futm_medium%3Dcopy_link"
                    target="_blank"
                    rel="noreferrer">
                    <img src={inst} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img src={youtube} alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img src={whatsapp} alt="WhatsApp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
