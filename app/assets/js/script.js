import Gerar from './Gerar.js'

const gerar = new Gerar('#text', '#gerar', '#save', '.wrap-img',
{
  type: 'image/jpeg',
  quality: 1,
  width: 240,
  margin: .8,
  color: {
    dark:"#000",
    light:"#fff"
  }
}
).init()
