--------------------------------------------------------------------------------------
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

-- Configuração diferente do typeorm atulizado
     https://typeorm.io/migrations
[ok] https://www.youtube.com/watch?v=j8cm2C5-xn8

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
  39:55 - Gerando migrations automáticas
  }
https://typeorm.io/migrations
[ok]

/*
migrationsTableName: 'custom_migration_table'

  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/src/shared/entities/migrations/*.{ts,js}`]
*/
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')
