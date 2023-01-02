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
[ok] https://www.youtube.com/watch?v=j8cm2C5-xn8
---
