import { create, Whatsapp, Message, SocketState } from 'venom-bot'

class Sender {
  private client: Whatsapp

  constructor() {
    this.initialize()
  }

  async sendText(to: string, body: string) {
    this.client.sendText(to, body)
  }

  private initialize() {
    const qr = (base64Qrimg: string) => {}
    const status = (statusSession: string) => {}
    const start = (client: Whatsapp) => {
      this.client = client

      //this.sendText('555134422586@c.us', 'Teste Aniversariante')
    }
    create({ session: 'whatsappbotAniver', multidevice: false })
      .then(client => start(client))
      .catch(erro => {
        console.log(erro)
      })

    }
}

export default Sender 
