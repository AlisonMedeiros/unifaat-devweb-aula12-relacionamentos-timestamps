# Unifaat :: Devweb :: Aula 12 - Relacionamentos e Timestamps

## Instalação e Execução

### Siga os passos abaixo para rodar o projeto via Docker:


   > No windows:

   ```ini
   copy .env.example .env
   ```

   > No linux

   ```ini
   cp .env.example .env
   ```


4. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up --build
   ```

   > ou, dependendo da versão do Docker:
   >
   > - Usuários com versões **mais antigas** ou com Docker Compose instalado separadamente usam:

   ```sh
   docker-compose up --build
   ```

   > - Usuários com **Docker moderno** devem usar:

   ```sh
   docker compose up --build
   ```

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

Observação: ./Insomnia.yml pode ser utilizado no insomnia

# API RESTful de Cadastro de Clientes

## Descrição
API RESTful desenvolvida em NodeJS e PostgreSQL para gerenciar o cadastro de clientes, implementando operações CRUD.

## Tecnologias Utilizadas
- NodeJS
- ExpressJS
- PostgreSQL
- Sequelize (ORM)

## Pré-requisitos
- NodeJS instalado
- npm ou yarn instalado
- PostgreSQL instalado e em execução
- Configuração do banco de dados (nome do banco, usuário, senha, host, porta)

## Instalação
1. Clonar o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Entrar na pasta do projeto:
   ```sh
   cd <nome_do_repositorio>
   ```
3. Instalar dependências:
   ```sh
   npm install
   ```
4. Configurar o banco de dados:
   - Criar o banco de dados e executar o script DDL fornecido.
   - Configurar as variáveis de ambiente ou arquivo de configuração.

## Como Executar a API
```sh
npm start
```
A API estará disponível em: http://localhost:3000

## Documentação das Rotas

### Criação de Cliente (Create)
- **Método**: POST
- **Endpoint**: /clientes
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Nome do Cliente",
    "data_nascimento": "YYYY-MM-DD",
    "rg": "123456789",
    "cpf": "123.456.789-00",
    "telefone": "(11) 1234-5678",
    "endereco": "Rua Exemplo",
    "numero": "123",
    "cidade": "Cidade",
    "uf": "UF",
    "cep": "12345-678"
  }
  ```
- **Respostas**:
  - 201: Cliente criado com sucesso
  - 400: Campos inválidos ou CPF já existente
  - 500: Erro interno do servidor

### Leitura de Cliente por Código (Read - Individual)
- **Método**: GET
- **Endpoint**: /clientes/:codigo
- **Respostas**:
  - 200: Cliente encontrado
  - 404: Cliente não encontrado
  - 500: Erro interno do servidor

### Listagem de Clientes (Read - All)
- **Método**: GET
- **Endpoint**: /clientes
- **Respostas**:
  - 200: Lista de clientes
  - 500: Erro interno do servidor

### Atualização de Cliente (Update)
- **Método**: PUT
- **Endpoint**: /clientes/:codigo
- **Corpo da Requisição**: Objeto JSON com os campos a serem atualizados
- **Respostas**:
  - 200: Cliente atualizado com sucesso
  - 404: Cliente não encontrado
  - 400: Campos inválidos ou CPF já existente
  - 500: Erro interno do servidor

### Exclusão de Cliente (Delete)
- **Método**: DELETE
- **Endpoint**: /clientes/:codigo
- **Respostas**:
  - 204: Cliente excluído com sucesso
  - 404: Cliente não encontrado
  - 500: Erro interno do servidor

## Observações
- Implementação de validações básicas para os campos.
- Tratamento de erros consistente para diferentes cenários.
