export default class Gerar {
  constructor(input, btn, saveBtn, imgWrap, config) {
    this.QRCode = require('qrcode');
    this.opts = config
    this.value = document.querySelector(input);
    this.btn = document.querySelector(btn);
    this.saveBtn = document.querySelector(saveBtn);
    this.imgWrap = document.querySelector(imgWrap);
  }
  getQrCode() {
    const {status, message} = this.validate()
    if(status) {
      const { value } = this.value
      this.QRCode.toDataURL( value , this.opts ,  (err, url) => {
        if(err) return err
        const img = new Image()
        img.classList.add('img')
        img.src = url
        this.imgWrap.innerHTML = ''
        this.imgWrap.appendChild(img)
      })
    } else {
      this.errorElement(message)
    }
  }
  saveQrCode() {
    const {status, message} = this.validate()
    if(status) {
      const { value } = this.value
      window.open(`save=${value}`,'save')
    } else {
      this.errorElement(message)
    }
  }
  errorElement(message) {
    this.value.nextElementSibling.innerText = message
    setTimeout(() => {
      this.value.nextElementSibling.innerText = ''
    },1500)
  }
  validate() {
    const {value} = this.value
    if(value) {
      return {
        status: true,
        message: ''
      }
    } else {
      return {
        status: false,
        message: 'Não deixe em branco.'
      }
    } 
  }
  addClickEvent() {
    this.btn.addEventListener('click', this.getQrCode)
    this.saveBtn.addEventListener('click', this.saveQrCode)
  }
  bindItems() {
    this.getQrCode = this.getQrCode.bind(this)
    this.saveQrCode = this.saveQrCode.bind(this)
  }
  init() {
    this.bindItems()
    this.addClickEvent()
    return this
  }
}


