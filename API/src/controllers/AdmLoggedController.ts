import { Request, Response } from 'express'
import ShowProfileService from 'src/services/admLoggedServices/showAdmLogged'
import UpdateAdmLogged from 'src/services/admLoggedServices/updateAdmLogged'

class AdmLoggedController {
  public async showAdmLogged(req: Request, res: Response): Promise<Response> {
    const id = req.adm.id
    const showAdm = new ShowProfileService()
    const thisAdm = await showAdm.execute({ id })
    console.log('O que está trazendo no id? ====> ', id)
    return res.json(thisAdm)
  }

  public async updateLogged(req: Request, res: Response): Promise<Response> {
    const adm_id  = req.adm.id
    const { name, email, password, old_password } = req.body

    const showAdm = new UpdateAdmLogged()

    const thisAdm = await showAdm.execute({
      adm_id,
      name,
      email,
      password,
      old_password,
    })

    return res.json(thisAdm)
  }
}
export default AdmLoggedController
