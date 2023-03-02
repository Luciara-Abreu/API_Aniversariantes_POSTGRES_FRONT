import express, { Request, Response } from 'express'
import StartQrCodeController from 'src/controllers/WhatsController'
import Sender from 'src/services/whatsApp/sendMessageforWhatsService'

const RouteSendWhats = express()
RouteSendWhats.use(express.urlencoded({ extended: false }))

const startController = new StartQrCodeController()
const sender = new Sender()

console.log('')
console.log('********************** Rotas send for Whats ****************')
console.log('------------------------------------------------------------')

RouteSendWhats.get('/Start', startController.StartQrCode)

RouteSendWhats.post('/Send', async (req: Request, res: Response) => {
  const { number, message } = req.body
  const sendWhats = sender.sendText({ number, message })
  return res.json(sendWhats)
})

export default RouteSendWhats
