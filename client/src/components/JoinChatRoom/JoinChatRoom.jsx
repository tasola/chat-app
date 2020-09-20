import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../styles/palette'
import { Box, Header, Input } from '../../styles/shared-styles/shared-styles'

const ComponentWrapper = styled.div`
  padding: 1em 4em;
`

const JoinLink = styled(Link)`
  text-decoration: none;
  background-image: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
  padding: 0.5em;
  border-radius: 100px;
  color: white;
  width: 30%;
  margin: 0 auto;
  text-align: center;
  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`

const JoinChatRoom = () => {
  const [roomName, setRoomName] = useState('')
  const [userName, setUserName] = useState('')

  return (
    <Box>
      <Header>join a chat room</Header>
      <ComponentWrapper>
        <Input
          value={roomName}
          placeholder="Room name"
          onChange={(event) => setRoomName(event.target.value)}
        ></Input>
        <Input
          value={userName}
          placeholder="User name"
          onChange={(event) => setUserName(event.target.value)}
        ></Input>
      </ComponentWrapper>
      <JoinLink
        onClick={(event) =>
          !userName || !roomName ? event.preventDefault() : null
        }
        to={`/chat-room?room=${roomName}&user=${userName}`}
      >
        join room
      </JoinLink>
    </Box>
  )
}

export default JoinChatRoom
