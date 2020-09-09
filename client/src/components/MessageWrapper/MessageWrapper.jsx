import React from 'react'
import Message from '../Message/Message'

const MessageWrapper = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <Message key={index} message={message} />
    ))}
  </div>
)

export default MessageWrapper
