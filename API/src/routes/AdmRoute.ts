import express from 'express'
import { AdmController } from 'src/controllers/AdmController'

const RouteAdm = express()

console.log('********** Rotas de Adms ***************')
RouteAdm.post('/AddAdm', new AdmController().createAdm)
RouteAdm.get('/listOneAdm/:id', new AdmController().listOneAdm)
RouteAdm.get('ListAllAdm', new AdmController().listAllAdm)
RouteAdm.patch('/UpdateAdm/:id', new AdmController().updateAdm)
RouteAdm.delete('/DeleteAdm/:id', new AdmController().deleteAdm)
console.log('')
export default RouteAdm
