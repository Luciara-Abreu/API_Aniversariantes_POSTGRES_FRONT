import { Request, Response } from 'express'
import CreateAvatarService from 'src/services/avatarServices/createAvatarService'
import DeleteAvatarService from 'src/services/avatarServices/deleteAvatarServer'
import UpdateAvatarService from 'src/services/avatarServices/updateAvatarService'

class AvatartController {
  async createAvatar(req: Request, res: Response) {
    const { avatar, userID } = req.body

    const addAvatarUser = new CreateAvatarService()
    const thisAvatar = await addAvatarUser.execute({
      avatar,
      userID,
    })
    return res.json(thisAvatar)
  }

  async updateAvatar(req: Request, res: Response) {
    const { id } = req.params
    const { avatar } = req.body

    const AvatarForUpdate = new UpdateAvatarService()
    const thisAvatar = await AvatarForUpdate.execute({
      id,
      avatar,
    })
    return res.json(thisAvatar)
  }

  async deleteAvatar(req: Request, res: Response) {
    const { id } = req.params

    const thisAvatar = new DeleteAvatarService()
    await thisAvatar.execute({ id })
    return res.json([])
  }
}

export default AvatartController
