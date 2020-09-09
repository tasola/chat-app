import React, { useEffect } from 'react'
import io from 'socket.io-client'
import { apiUrl } from '../../utils/constants'

let socket

const ChatRoom = () => {
  useEffect(() => {
    socket = io(apiUrl)
    console.log(socket)
  }, [apiUrl])

  return <div>Hi!</div>
}

export default ChatRoom
