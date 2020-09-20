import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../styles/palette'

const MessageBox = styled.div`
  background-color: ${(props) =>
    props.isCurrentUsersMessage ? '#F5F5F5' : primaryColor};
  color: ${(props) => (props.isCurrentUsersMessage ? 'black' : '#F5F5F5')};
  max-width: 49%;
  border-radius: 5px;
  word-break: break-word;
  align-self: ${(props) =>
    props.isCurrentUsersMessage ? 'flex-end' : 'flex-start'};
  margin: 5px 5px 1px 5px;
`

const MessageText = styled.p`
  padding: 0 0.5em;
`

const SenderText = styled.p`
  color: black;
  margin: 0 8px;
  font-size: 9pt;
  font-style: italic;
`

const Message = ({ message, currentUser }) => (
  <>
    <MessageBox isCurrentUsersMessage={currentUser === message.user}>
      <MessageText>{message.text}</MessageText>
    </MessageBox>
    {currentUser !== message.user && <SenderText>{message.user}</SenderText>}
  </>
)

export default Message
