import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatRoom from './components/ChatRoom/ChatRoom'
import JoinChatRoom from './components/JoinChatRoom/JoinChatRoom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, a {
    font-family: 'Montserrat'
  }
`

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={JoinChatRoom} />
    <Route path="/chat-room" component={ChatRoom} />
  </Router>
)

export default App
