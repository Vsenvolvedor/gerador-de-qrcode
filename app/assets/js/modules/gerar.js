export default function initGerar() {
  const QRCode = require('qrcode')
  const text = document.querySelector('#text')
  const button = document.querySelector('#gerar')
  const save = document.querySelector('#save')
  const img = document.querySelector('.img')
  const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.3,
    margin: 1,
    color: {
      dark:"#000",
      light:"#fff"
    }
  }

  button.addEventListener('click', () => {
    QRCode.toDataURL(text.value , opts ,  (err, url) => {
      if(err) return err
      img.setAttribute('src', url)
    })
  })

  save.addEventListener('click', () => {
    QRCode.toFile(__dirname + `${text.value}.jpeg`,text.value, opts)
  })
}


