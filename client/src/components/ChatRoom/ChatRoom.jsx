import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import { apiUrl } from '../../utils/constants'
import socketEvents from '../../utils/socketEvents'
import MessageWrapper from '../MessageWrapper/MessageWrapper'
import MessageInput from '../MessageInput/MessageInput'
import styled from 'styled-components'
import { Box, Header } from '../../styles/shared-styles/shared-styles'

const ChatRoomBox = styled(Box)`
  padding-left: 3em;
  padding-right: 3em;
`

let socket

const ChatRoom = ({ location }) => {
  const [messageText, setMessageText] = useState('')
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
    if (messageText) {
      socket.emit(socketEvents.MESSAGE, { text: messageText, user: user }, () =>
        setMessageText('')
      )
    }
  }

  console.log(messages)

  return (
    <ChatRoomBox>
      <Header>{room.toLowerCase()}</Header>
      <MessageWrapper messages={messages} user={user} />
      <MessageInput
        message={messageText}
        setMessage={setMessageText}
        emitMessage={emitMessage}
      />
    </ChatRoomBox>
  )
}

export default ChatRoom
