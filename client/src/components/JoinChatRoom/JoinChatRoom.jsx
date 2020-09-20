import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../utils/palette'

const JoinChatRoomBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 35vw;
  min-width: 400px;
  margin: 0 auto;
  padding: 1.5em 1em;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`

const Header = styled.h3`
  text-align: center;
  margin: 0;
`

const ComponentWrapper = styled.div`
  padding: 1em 4em;
`

const Input = styled.input`
  width: 100%;
  height: 2.5em;
  margin: 0.5em 0;
  border: none;
  border-bottom: 2px solid ${primaryColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  &:focus {
    outline-width: 0;
  }
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
    <JoinChatRoomBox>
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
    </JoinChatRoomBox>
  )
}

export default JoinChatRoom
