--- ************************************\*\*\*\*************************************
🟡
Construindo uma API Restful de Agenda de Aniversariantes Javascript com Node.js,
ExpressJS, Typescript, TypeORM, Postgres, Redis, etc.

--- ************************************\*\*\*\*************************************
🟡
https://www.udemy.com/course/api-restful-de-vendas/learn/lecture/23696420#content
criar o package json
[ok] yarn init -y

Criar TSConfig para configurar o typescript
[ok] yarn tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

-- configurar o nodemon no package.json
[ok]"scripts": {
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
}

-- Configurar o editorConfig
[ok] https://www.aluiziodeveloper.com.br/editorconfig/

-- configurar o Eslint
https://www.aluiziodeveloper.com.br/eslint/
[ok] yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

-- configuar o Prettier
[ok] https://www.aluiziodeveloper.com.br/prettier/
yarn add prettier -D

-- Configurando a importações
[ok] https://github.com/aluiziodeveloper/api-vendas/blob/main/project.md

-- instalar bibliotecas
[ok] yarn add express cors express-async-errors
[ok] yarn add -D @types/express @types/cors

--- ************************************\*\*\*\*************************************
🟡 -- Configuração diferente do typeorm atulizado - com Guido Cerqueira
https://typeorm.io/migrations
[ok] https://www.youtube.com/watch?v=j8cm2C5-xn8

Repositório do projeto: https://github.com/guidocerqueira/api...

00:00 - Introdução
01:49 - Configuração do projeto com o TypeScript
13:20 - Configuração do TypeORM
21:08 - Configuração do Express.js
26:50 - Criando entidades
39:55 - Gerando migrations automáticas
51:09 - Criando mais entidades (Relacionamento N:N)
01:02:11 - Criando controladores e repositórios
01:20:20 - Cadastro com relacionamentos
01:29:56 - Buscando registros com TypeORM
01:50:25 - Listagem de registros com TypeORM


--- ************************************\*\*\*\*************************************
🟡
-- Configurando o docker - Docker no Windows 10 - Corrigindo o Erro WSL 2
[ok] https://www.youtube.com/watch?v=I1bOOV2CJM8

-- Criando o containner
[ok] docker run --name postgres -e POSTGRES_PASSWORD=123456=docker -p 5432:5432 -d postgres
para validar se o container está em execução rodamos o codigo = docker ps

-- Instalar Dbeaver
[ok] https://dbeaver.io/download/

-- Configurar as Migrations
Essa configuração fica no package.jason
"typeorm": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:generate ./src/shared/migrations/default",

https://www.youtube.com/watch?v=j8cm2C5-xn8 = {
26:50 - Criando entidades
40:00 - Gerando migrations automáticas -
comando ==> yarn typeorm - cria migrations de todas as entidades existentes.
commando ==> yarn migration:run = popula ou atualiza os campos da tabela
}
https://typeorm.io/migrations
[ok]

/\*
migrationsTableName: 'custom_migration_table'

entities: [`${__dirname}/**/entities/*.{ts,js}`],
migrations: [`${__dirname}/src/shared/entities/migrations/*.{ts,js}`]
\*/
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')

--- ************************************\*\*\*\*************************************
🟡
encriptografar as senhas
encrypt passwords with bcryptjs e também a typagem
yarn add bcryptjs
yarn add -D @types/bcryptjs

--- ************************************\*\*\*\*************************************
🟡
JWT
Criar token a partir da senha encriptofrafada
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken

--- ************************************\*\*\*\*************************************
🟡
md5 - nessse site vc digita algo doido e ele cria um rash e vc add esse rash no
segundo parametro na configuração do token com jsonwebtokeno
https://md5decrypt.net/en/

--- ************************************\*\*\*\*************************************
🟡
ainda sobre JTW
https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1

--- ************************************\*\*\*\*************************************
🟡
agora instalar o multer para auxiliar o usuário a fazer upload da imagem do avatar.

yarn add multer
yarn add -D @types/multer

--- ************************************\*\*\*\*************************************
🟡
Contém itens enfatizados
Solução.: recarregando o VS com o comando Ctrl + shift + p e pesquisando Desenvolvedor: Recarregar janela

--- ************************************\*\*\*\*************************************
🟡

## biblioteca de data e hota => https://date-fns.org/

enviar e-mails para uma caixa de entrada fake para teste de envios de e-mail
https://ethereal.email/
yarn add nodemailer
yarn add -D @types/nodemailer

--- ************************************\*\*\*\*************************************

Usaremos o handlebar para criar um tamplete bunitinho para o reset de senha.
https://handlebarsjs.com/

--- ************************************\*\*\*\*************************************
🟡

\***\* No repositório
async findByName(name: string): Promise<Adm | null> {
/**

- Desta forma ele trás todo objeto e complica para fazer validações.
  const adm = await this.findOne({
  where: {
  name,
  },
  })
  \*/
  const adm = await this.findOneBy({ name }) // Desta trás apenas o name
  return adm
  },

--- ************************************\*\*\*\*************************************
🟡
/_ Rotas de Perfil do Usuário
Se eu for atualizar apenas o nome e email, coloco apenas esses dois campos, mas se for
atualizar a senha, tenho que colocar nome, email, a senha nova e a antiga e tbm a confirmação.
"old_password": "123456",
"password": "123456",
"password_confirmation": "123456"
_/
--- ************************************\*\*\*\*************************************
🟡 Modulo 09 de criação de recursos do módulo custmers( clientes) eu nõa vou usar.
🟡 Modulo 11 de criação de recursos do módulo custmers( Pedidos de compras) eu nõa vou usar.
--- ************************************\*\*\*\*************************************
🟡 Modulo 12 - implementar paginação com typeORM
https://typeorm.io/select-query-builder#using-pagination
--- ************************************\*\*\*\*************************************
🟡 Paginação = > trás os 10 usuários e suas mensagens de aniversário.
const user = await userRepository.createQueryBuilder('user').leftJoinAndSelect('user.posts', 'posts').take(10).getMany()


--- ************************************\*\*\*\*************************************
🟡  Venom - bot - para enviar mensagens para WhatsApp
 inicio da aula 27:00 - https://www.youtube.com/watch?v=uCoSzw9L0SQ'
yarn add venom-bot

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡

--- ************************************\*\*\*\*************************************
🟡
