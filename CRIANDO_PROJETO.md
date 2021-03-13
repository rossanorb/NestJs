 ## Criando um novo projeto

 ```bash
 # Cria um novo projeto Nest com padrão de pastas
 nest new nome_projeto
```

## Dependências instaladas

```bash
# TypeORM  um ORM pode ser usado com Typescript 
npm install typeorm @nestjs/typeorm --sav

# Faz a comunicação do node com banco MySql
npm install mysql --save

# Permite criar arquivos de configuração para nest
npm install @nestjs/config --save

```


## Typeorm

```bash

# cria entidade
npm run typeorm entity:create -- -n product

# Cria migração
npm run typeorm migration:create -- -n createProductsTable

# rodando a migração no banco
npm run typeorm migration:run

```

## Nest commandos

# cria um novo controller
```bash
# cria um novo controller
nest generate controller controllers/product
```