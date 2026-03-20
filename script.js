const canvas = document.getElementById('cardCanvas')
const ctx = canvas.getContext('2d')

const input = document.getElementById('nameInput')
const downloadBtn = document.getElementById('downloadBtn')

const template = new Image()
template.src = 'ucapan.png'

// load font
const font = new FontFace('Montserrat', 'url(Montserrat-SemiBold.ttf)')
font.load().then(f => {
  document.fonts.add(f)
})

// saat gambar siap
template.onload = () => {
  canvas.width = template.width
  canvas.height = template.height

  document.fonts.ready.then(() => {
    drawCard('')
  })
}

// input update
input.addEventListener('input', () => {
  drawCard(input.value)
})

function drawCard(name) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(template, 0, 0)

  ctx.fillStyle = '#FFFFFF'
  ctx.font = '60px "Montserrat"'
  ctx.textAlign = 'center'

  ctx.fillText(name, canvas.width / 2, canvas.height * 0.7)
}

// ✅ download fix (anti zonk di HP)
downloadBtn.addEventListener('click', () => {
  canvas.toBlob(function(blob) {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'ucapan.png'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(link.href)
  }, 'image/png')
})
