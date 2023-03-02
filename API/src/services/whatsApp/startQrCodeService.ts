import { create, Whatsapp } from 'venom-bot'

interface QRCode {
  base64Qr: string
  attempts: number
  urlCode: string
}

class StartQrCodeService {
  constructor() {
    this.initialize()
  }

  public async initialize() {
    const qr = (base64: string, urlCode: string) => {}

      create(
      'whatsappAniverExport',
      (base64Qr, urlCode) => {
        console.log('')
        console.log('Created QR ===>   ', urlCode)
        console.log('')
        return urlCode
      },
      undefined,
      { logQR: false },
    )
  }
}

export default StartQrCodeService
