import Handlebars from 'handlebars'
import { IParseMailTemplate } from 'src/interfaces/IEmail'
import fs from 'fs'

class HandlebarTemplate {
  public async parse({ file, variables }: IParseMailTemplate): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    })

    const parseTemplate = Handlebars.compile(templateFileContent)

    return parseTemplate(variables)
  }
}

export default HandlebarTemplate
