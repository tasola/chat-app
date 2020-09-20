import React from 'react'
import { Input } from '../../styles/shared-styles/shared-styles'

const MessageInput = ({ message, setMessage, emitMessage }) => {
  return (
    <Input
      value={message}
      placeholder="Enter your message"
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? emitMessage(event) : null
      }
    ></Input>
  )
}

export default MessageInput
