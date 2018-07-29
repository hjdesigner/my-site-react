'use strict'

import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import Header from 'views/header'

class App extends PureComponent {
  render () {
    return (
      <Header />
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
    font-family: Arial;
    font-size: 100%;
  }
`

export default App
