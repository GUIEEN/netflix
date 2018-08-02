const express = require('express'),
  socketIO = require('socket.io'),
  http = require('http'),
  path = require('path'),
  logger = require('morgan'), // morgan is loggar
  app = express(),
  server = http.createServer(app), // http server,
  io = socketIO(server),
  db = require('./db'),
  Message = require('./models')

const PORT = 4000


const handleSocketConnect = socket => {
  // console.log(`socket with the id ${socket.id} connected !`)
  socket.on('new message sent', data => {
    // console.log('frontend says: ', data)
    const { message, creator } = data
    Message.create({
      message,
      creator,
    })
    socket.broadcast.emit('notification', data) // to all the other sockets except sending one !
  })
  // socket.on('fuck', data => {
  //   console.log('ping')
  //   io.emit('pong')
  // })
}

const handleGetMessages = async (req, res) => Message.find().then(messages => res.json({ messages }))
app.get('/messages', handleGetMessages)

const handleListening = () => console.log(` Server Running on Port: http://localhost:${PORT} `)

server.listen(PORT, handleListening) // app.listen(PORT, handleListening())
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, './public')))

io.on('connection', handleSocketConnect) // Give static file for Client url : localhost:4000/socket.io/socket.io.js
