import React from 'react'

const Message = ({ message }) => (
  <div>
    <p>
      {message.user}: {message.text}
    </p>
  </div>
)

export default Message
