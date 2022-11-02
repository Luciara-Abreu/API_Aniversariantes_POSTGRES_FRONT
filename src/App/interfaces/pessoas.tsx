
export interface IPessoaCore {
  title: string
  dados: IDados[]
}

export interface IDados {
  id: string
  nome: string
  dataNascimento: string
  email: string
  fone: string
}

export const pessoa: IPessoaCore[] = [
  {
    title: 'dadosPessoas',
    dados: [
      {
        id: 'dadosPessoais',
        nome: 'nome',
        dataNascimento: 'dataNascimento',
        email: 'email',
        fone: 'email'
      }
    ]
  }
]