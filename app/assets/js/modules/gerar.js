export default function initGerar() {
  const QRCode = require('qrcode')
  const text = document.querySelector('#text')
  const button = document.querySelector('#gerar')
  const img = document.querySelector('.img')

  button.addEventListener('click', () => {
    QRCode.toDataURL(text.value , function (err, url) {
      img.setAttribute('src', url)
    })
  })
}


