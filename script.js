const canvas = document.getElementById('cardCanvas')
const ctx = canvas.getContext('2d')

const input = document.getElementById('nameInput')
const downloadBtn = document.getElementById('downloadBtn')

const template = new Image()
template.src = 'ucapan.png'

// load font
const font = new FontFace('CustomFont', 'url(font.ttf)')
font.load().then(f => {
  document.fonts.add(f)
  drawCard('')
})

template.onload = () => {
  drawCard('')
}

input.addEventListener('input', () => {
  drawCard(input.value)
})

function drawCard(name) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // background
  ctx.drawImage(template, 0, 0, canvas.width, canvas.height)

  // text style
  ctx.fillStyle = '#FFFFFF'
  ctx.font = '30px Montserrat'
  ctx.textAlign = 'center'

  // posisi teks
  ctx.fillText(name, canvas.width / 2, canvas.height / 3 + 750)
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a')
  link.download = 'IdulFitri.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
})
