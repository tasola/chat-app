import React from 'react'

const MessageInput = ({ message, setMessage, emitMessage }) => {
  return (
    <input
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? emitMessage(event) : null
      }
    ></input>
  )
}

export default MessageInput
