import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import { apiUrl } from '../../utils/constants'
import socketEvents from '../../utils/socketEvents'
import MessageWrapper from '../MessageWrapper/MessageWrapper'
import MessageInput from '../MessageInput/MessageInput'

let socket

const ChatRoom = ({ location }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [room, setRoom] = useState('')
  const [user, setUser] = useState('')

  // Route-specific effect
  useEffect(() => {
    const { user, room } = queryString.parse(location.search)
    setRoom(room)
    setUser(user)
  }, [location.search])

  // Connection-specific effect
  useEffect(() => {
    socket = io(apiUrl)
    socket.emit(socketEvents.CONNECT, { user, room })
    return () => {
      socket.emit(socketEvents.DISCONNECT)
      socket.off()
    }
  }, [])

  // Event-specific effect
  useEffect(() => {
    socket.on(socketEvents.MESSAGE, (message) =>
      setMessages((messages) => [...messages, message])
    )
  }, [])

  const emitMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit(socketEvents.MESSAGE, message, () => setMessage(''))
    }
  }

  return (
    <div>
      <h3>{room.toUpperCase()}</h3>
      <MessageWrapper messages={messages} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        emitMessage={emitMessage}
      />
    </div>
  )
}

export default ChatRoom
