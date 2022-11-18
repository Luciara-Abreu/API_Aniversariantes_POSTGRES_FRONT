import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const dateTostring = (date?: string | null): string => {
  const birthDate = date?.split('-')
  const year = birthDate?.[0]
  const month = birthDate?.[1]
  const day = birthDate?.[2].split('T')?.[0]
  const result = `${day}/${month}/${year}`
  return !date ? '' : result
}

const stringToDate = (date?: string): Date | undefined => {
  if (!date) return undefined
  const birthDate = date.split('/')
  const day = Number(birthDate[0])
  const month = Number(birthDate[1])
  const year = Number(birthDate[2])
  const result = new Date(+year, month - 1, +day)
  return result
}

const removeSpecialCharacters = (data: string | null) => {
  if (data) return data.replace(/\D+/g, '')
  return null
}

const handleValidateDate = (birthDate: string): boolean | string => {
  const selectedDate = stringToDate(birthDate)
  const todayDate = new Date()
  if (!selectedDate || selectedDate > todayDate) {
    return 'Data inválida'
  }
  const selectedYear = Number(birthDate.slice(birthDate.length - 4))
  // 130 is the oldest human living
  const validYear = todayDate.getFullYear() - 130

  if (selectedYear < validYear) {
    return 'Data inválida'
  }
  return true
}

const userRegex = {
  email: /^ *([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,6}) *$/,
  date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/i,
  cpf: /(\d{3}).(\d{3}).(\d{3})-(\d{2})/,
  brazilianCellphone: /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}-?\d{4}$/g
}

const handleValidateDocument = (
  documentText: string,
  disabled?: boolean
): boolean | string => {
  if (!documentText) {
    return 'CPF obrigatório'
  }
  if (!disabled && !documentText.match(userRegex.cpf)) {
    return 'CPF inválido'
  }

  return true
}

const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2')
}


const schema = yup.object({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("Campo Obrigatório"),
  birthdate: yup.string().required("Campo Obrigatório"),
  fone: yup.string().required("Campo Obrigatório"),
  //password: yup.string().min(6, "A senha deve de ter pelo menos 6 digitos").required("Campo Obrigatório"),
  //confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais").required("Campo Obrigatório"),
}).required();

export {
  dateTostring,
  stringToDate,
  removeSpecialCharacters,
  handleValidateDate,
  handleValidateDocument,
  maskCPF,
  maskPhone,
  schema
}

