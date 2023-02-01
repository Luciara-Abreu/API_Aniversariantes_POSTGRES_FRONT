import { Request, Response } from 'express'
import UpdateAvatarService from 'src/services/avatarServices/createAvatarService'

class AvatarController {
  async updateAvatar(req: Request, res: Response): Promise<Response> {
    const avatarUpdate = new UpdateAvatarService()

    const adm = await avatarUpdate.execute({
      id: req.adm.id,
      avatarFilename: req.file!.filename,
    })

    return res.json(adm)
  }
}
export default AvatarController
