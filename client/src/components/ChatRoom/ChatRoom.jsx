import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { apiUrl } from '../../utils/constants'
import socketEvents from '../../utils/socketEvents'

let socket

const ChatRoom = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket = io(apiUrl)
    socket.on(socketEvents.MESSAGE, (message) =>
      setMessages((messages) => [...messages, message])
    )
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [])

  const emitMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit(socketEvents.MESSAGE, message, () => setMessage(''))
    }
  }

  return (
    <div>
      <h3>Hi!</h3>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? emitMessage(event) : null
        }
      ></input>
    </div>
  )
}

export default ChatRoom
