const firePixelsArray = []
const fireWigth = 9
const fireHeight = 10

function Start() {
  createFireDataStructure()
  renderFire()
}

function createFireDataStructure() {
  const numberOfPixels = fireWigth * fireHeight

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0
  }

}

function calculateFirePropagation() {
  
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>'
  
  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>'

    for (let column = 0; column < fireWigth; column++) {
      const pixelIndex = column + ( fireWigth * row )
      const fireIntensity = firePixelsArray[pixelIndex]

      html += '<td>'
      html += `<div class="pixel-index">${pixelIndex}</div>`;
      html += fireIntensity
      html += '</td>'
    }
    html += '</tr>'
  } 

  html += '</table>'

  document.querySelector('#fireCanvas').innerHTML = html
}

Start()
