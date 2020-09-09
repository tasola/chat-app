const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const router = require('./controllers/endpoints')

const port = process.env.port || 8000
const app = express()

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('New connection')
  socket.on('disconnect', () => {
    console.log('Lost a connection')
  })
})

app.use('/', router)

server.listen(port, () => console.log(`Server is running on ${port}`))
