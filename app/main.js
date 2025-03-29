import { app, BrowserWindow } from 'electron';
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 560,
    height: 720,
    webPreference: {
      nodeIntegretion: true,
    },
  });

  mainWindow.loadFile('./app/index.html')
}

app.whenReady().then(() =>{
  createWindow();
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});