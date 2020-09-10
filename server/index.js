const express = require('express')
const http = require('http')
const router = require('./controllers/endpoints')
const socketEvents = require('./utils/socketEvents')

const port = process.env.port || 8000
const app = express()

const server = http.createServer(app)

// Fix to timeout problem of socket.io v2.1.0+, https://github.com/socketio/socket.io/issues/3259
const io = require('socket.io')(server, {
  pingTimeout: 60000,
})

io.on('connection', (socket) => {
  socket.broadcast.emit(socketEvents.MESSAGE, {
    text: 'Another user has joined the chat!',
    user: 'Announcement',
  })

  socket.on(socketEvents.MESSAGE, (message, callback) => {
    io.emit(socketEvents.MESSAGE, message)
    callback()
  })

  socket.on(socketEvents.DISCONNECT, () => {
    io.emit(socketEvents.MESSAGE, {
      text: 'A user has left the chat',
      user: 'Announcement',
    })
  })
})

app.use('/', router)

server.listen(port, () => console.log(`Server is running on ${port}`))
