import React from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'

import { store } from './store'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    
    background-color: #F8F8F8;
  }
`

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />

        <GlobalStyle />
      </Provider>
    </>
  )
}

export default App;
