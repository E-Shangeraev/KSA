import React from 'react'
import ReactDOM from 'react-dom'
import { YMInitializer } from 'react-yandex-metrika'
import './scss/style.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <YMInitializer
      accounts={[84970162]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
