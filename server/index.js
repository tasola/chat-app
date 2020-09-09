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
  socket.broadcast.emit(
    socketEvents.MESSAGE,
    'Another user has joined the chat!'
  )

  socket.on(socketEvents.MESSAGE, (message, callback) => {
    io.emit(socketEvents.MESSAGE, message)
    callback()
  })

  socket.on(socketEvents.DISCONNECT, () => {
    io.emit(socketEvents.MESSAGE, 'A user has left the chat')
  })
})

app.use('/', router)

server.listen(port, () => console.log(`Server is running on ${port}`))
