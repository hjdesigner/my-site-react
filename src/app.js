'use strict'

import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'views/header'
import Footer from 'views/footer'
import Home from 'views/home'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

injectGlobal`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #232222;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
`

export default App
