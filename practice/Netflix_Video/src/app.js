import './styles/app.css'

// NAVIGATION
const THRESHOLD = 2

const navigation = document.querySelector('ul')
const SCROLL_DOWN = 'scrolldown'

const hasScrolled = () => {
  let currentPosition = window.scrollY
  currentPosition > THRESHOLD
    ? navigation.classList.add(SCROLL_DOWN)
    : navigation.classList.remove(SCROLL_DOWN)
}

window.addEventListener('scroll', hasScrolled)

// VIDEO
const video = document.querySelector('.js-video')
const button = document.querySelector('.js-button')
const volumeBtn = document.querySelector('.js-volume')

video.muted = true
video.controll = true

const handleVideoClick = () => {
  if (video.paused) {
    video.play()
    button.innerHTML = '<i class="fas fa-stop"></i>'
  } else {
    video.pause()
    button.innerHTML = '<i class="fas fa-play"></i>'
  }
}

const handleVolumeClick = () => {
  if (video.muted) {
    video.muted = false
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>'
  } else {
    video.muted = true
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
  }
}

volumeBtn.addEventListener('click', handleVolumeClick)
button.addEventListener('click', handleVideoClick)
