import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import styled from 'styled-components'

const StyledMessageWrapper = styled.div`
  height: 500px;
  margin-top: 1em;
  margin-bottom: 0.5em;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const MessageWrapper = ({ messages, user }) => {
  const end = useRef(null)

  useEffect(() => {
    end.current.scrollIntoView({ behaviour: 'smooth' })
  }, [messages])

  return (
    <StyledMessageWrapper>
      {messages.map((message, index) => (
        <Message key={index} message={message} currentUser={user} />
      ))}
      <div ref={end} />
    </StyledMessageWrapper>
  )
}

export default MessageWrapper
