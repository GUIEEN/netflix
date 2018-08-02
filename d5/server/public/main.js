// socket for client
// console.log(io)

// const socket = io('http://localhost:4000')
const socket = io('/')

// const createNewMessageFake = () => {
//   console.log('emitting event')
//   socket.emit('new message', 'i love life')
// }

// setInterval(createNewMessageFake, 1500)

// setInterval(() => socket.emit('fuck'), 1000)

// socket.on('pong', () => {
//   console.log('pong')
// })

const
  // form = document.querySelector('form'),
  messageForm = document.querySelector('.js-messageForm'),
  messageInput = messageForm.querySelector('input'),
  nicknameForm = document.querySelector('.js-nicknameForm'),
  nicknameInput = nicknameForm.querySelector('input'),
  messages = document.querySelector('ul')

const NICKNAME = 'nickName'
let nickName = localStorage.getItem(NICKNAME)
console.log(messageForm,
  nicknameForm)
if (nickName) {
  messageForm.style.display = 'block'
} else {
  nicknameForm.style.display = 'block'
}

const addMessage = (text, mine) => {
  const message = document.createElement('li')
  message.innerHTML = text
  message.classList.add(mine ? 'mine' : 'yours')
  messages.appendChild(message)
}

const handleSubmit = event => {
  event.preventDefault()
  // console.log(input.value)
  const message = messageInput.value
  socket.emit('new message sent', {
    message,
    creator: nickName,
  })
  messageInput.value = ''
  addMessage(message, true)
}


const handleNicknameSubmit = event => {
  event.preventDefault()
  const nickNameFromInput = nicknameInput.value
  localStorage.setItem(NICKNAME, nickNameFromInput)
  nickName = nickNameFromInput
  nicknameInput.value = ''
  nicknameForm.style.display = 'none'
  messageForm.style.display = 'none'
}

socket.on('notification', data => {
  const { message, creator } = data
  addMessage(`${creator}: ${message}`, false)
  console.log(data)
})
// form.addEventListener('submit', handleSubmit)

messageForm.addEventListener('submit', handleSubmit)
nicknameForm.addEventListener('submit', handleNicknameSubmit)
