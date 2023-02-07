import Handlebars from "handlebars";
import { IParseMailTemplate } from "src/interfaces/IEmail";


class HandlebarTemplate {
  public async parse({file, variables}:IParseMailTemplate): Promise<string>{
    const parseTemplate = Handlebars.compile(file)

    return parseTemplate(variables)
  }
}

export default HandlebarTemplate
