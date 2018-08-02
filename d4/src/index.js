document.querySelector('body').innerHTML = `
<h1>Geolocation 2000.</h1>
<button class="js-locateMeBtn">Locate me!</button>
<div class="js-output"></div>
`
const locateMeBtn = document.querySelector('.js-locateMeBtn'),
  output = document.querySelector('.js-output')

const createMapImage = (lat, lng) => {
  const imageURL
}

const handleGeoError = () => {
  output.innerHTML = '<h2>Cant </h2>'
}

const handleGeoSuccess = position => {
  const {
    coords: { latitude, longitude }
  } = position
  output.innerHTML = '<h2>Got you!...</h2>'
  console.log(latitude, longitude)
}

const getLocation = () => {
  output.innerHTML = '<h2>Locating you...</h2>'
  const geoOption = {
    enableHighAccuracy: true
  }
  navigator.geolocation.getCurrentPosition(
    handleGeoSuccess,
    handleGeoError,
    geoOption
  )
}

locateMeBtn.addEventListener('click', getLocation)
