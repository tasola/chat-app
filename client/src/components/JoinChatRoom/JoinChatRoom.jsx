import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const JoinChatRoom = () => {
  const [roomName, setRoomName] = useState('')
  const [userName, setUserName] = useState('')

  return (
    <div>
      <input
        value={roomName}
        placeholder="Room name"
        onChange={(event) => setRoomName(event.target.value)}
      ></input>
      <input
        value={userName}
        placeholder="User name"
        onChange={(event) => setUserName(event.target.value)}
      ></input>
      <Link
        onClick={(event) =>
          !userName || !roomName ? event.preventDefault() : null
        }
        to={`/chat?room=${roomName}&user=${userName}`}
      >
        <button>Join room</button>
      </Link>
    </div>
  )
}

export default JoinChatRoom
