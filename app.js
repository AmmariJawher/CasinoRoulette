const {app, BrowserWindow} = require('electron')

function createWindow () {
  /*
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
  */
  const rouletteWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  rouletteWindow.loadFile('VirtualSports.html')
  rouletteWindow.webContents.openDevTools()
  
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
