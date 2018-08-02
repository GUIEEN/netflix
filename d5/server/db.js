const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nomflix-chat',
  { useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

const handleError = () => console.log('❌ ERROR Connecting to the DB')
const handleOpen = () => console.log('✅ connected to the DB')

db.on('error', handleError)
db.once('open', handleOpen)

module.exports = db
