const { app, BrowserWindow, Menu, dialog} = require('electron')
const QRCode = require('qrcode')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    icon: './app/assets/img/qr-icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }

  })

 
  mainWindow.title = 'Gerador de QrCode'
  mainWindow.loadFile('./app/index.html')

  mainWindow.webContents.setWindowOpenHandler((win) => {
    const [url, data] = win.url.split('save=')
    const options = {
      type: 'image/jpeg',
      quality: 1,
      width: 240,
      margin: .8,
      color: {
        dark:"#000",
        light:"#fff"
      }
    }

    if(win.frameName === `save`) {
      dialog.showOpenDialog({ properties: ['openDirectory'] }).then(({filePaths:path}) => {
        QRCode.toFile(`${path[0]}/${data}.jpeg`,data, options)
      })
      return {action: 'deny'}
    }
    return {action: 'deny'}
  })

  // Menu.setApplicationMenu(null)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  createWindow()
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.