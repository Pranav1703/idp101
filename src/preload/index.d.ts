import { ElectronAPI } from '@electron-toolkit/preload'
import { uploadResp } from '../main/ipcHandlers/fileIPC'
import { drive_v3 } from 'googleapis'

type api = {
  ipcHandle: ()=>void
  testIpc: ()=> Promise<any>
  authorizeUser: ()=>Promise<boolean>
  checkToken: ()=>Promise<boolean>
  getInfo: ()=>Promise<drive_v3.Schema$About | null>

  getList: ()=>Promise<any>
  fileUpload: (filePath:string)=>Promise<uploadResp>
  deleteFile: (fileID:string)=>Promise<any>
  folderUpload: (folderPath:string,parentFolderId?:string)=>Promise<uploadResp>
  downloadFile: (fileId:string,destPath:string)=>Promise<any>

}
//add this type after finishing all the ipcHandlers.

declare global {
  interface Window {
    api: api,
  }
}
