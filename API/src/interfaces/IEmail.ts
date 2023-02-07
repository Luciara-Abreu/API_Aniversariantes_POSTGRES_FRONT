interface IMailContact {
  name: string
  email: string
}

interface ITemplateVariable {
  [key: string]: string | number
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

interface ISendMail {
  to: IMailContact
  from?: IMailContact
  subject: string
  templateData: IParseMailTemplate
}

export { IParseMailTemplate, ISendMail }
