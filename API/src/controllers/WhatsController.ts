import { Request, Response } from 'express'
import StartQrCodeService from 'src/services/whatsApp/startQrCodeService'


class StartQrCodeController {
  public async StartQrCode(req: Request, res: Response) {
    const start = new StartQrCodeService()
    const newQRCode = await start.initialize()
    return res.json(newQRCode)
  }
}
export default StartQrCodeController
