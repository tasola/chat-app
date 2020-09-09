import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatRoom from './components/ChatRoom/ChatRoom'
import JoinChatRoom from './components/JoinChatRoom/JoinChatRoom'

const App = () => (
  <Router>
    <Route path="/" exact component={JoinChatRoom} />
    <Route path="/chat-room" component={ChatRoom} />
  </Router>
)

export default App
