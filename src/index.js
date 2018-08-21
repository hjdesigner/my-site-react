'use strict'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './redux-flow/configure-store'
import App from './app'

const store = configureStore()

const renderApp = (NextApp) => {
  render(
    <BrowserRouter>
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    </BrowserRouter>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
