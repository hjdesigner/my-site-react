'use strict'

import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'views/header'
import Footer from 'views/footer'
import Home from 'views/home'
import Blog from 'views/Blog'
import Lab from 'views/Lab'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/labs' component={Lab} />
          </Switch>
          <Footer />
        </div>
      </Router>
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
