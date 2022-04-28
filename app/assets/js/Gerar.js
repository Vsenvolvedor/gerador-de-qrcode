export default function initGerar() {
  const QRCode = require('qrcode')
  const text = document.querySelector('#text')
  const button = document.querySelector('#gerar')
  const save = document.querySelector('#save')
  const imgWrap = document.querySelector('.wrap-img')
  const opts = {
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
      const img = new Image()
      img.classList.add('img')
      img.src = url
      imgWrap.innerHTML = ''
      imgWrap.appendChild(img)
    })
  })

  save.addEventListener('click', () => {
    const data = text.value
    if(true) {
      const saveWindow = window.open(`save=${data}`,'save')
      saveWindow.close()
    }
  })
}


