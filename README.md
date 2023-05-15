# postal-code-api

## Sumário

- [postal-code-api](#postal-code-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este projeto consiste em um app back-end de Códigos de Endereçamento Postal (CEPs) que permite seu cadastro e consulta.

Existem três _endpoints_ disponíveis na API:

- POST `/ceps`: recebe um _payload_ em formato JSON contendo o número do CEP e seu logradouro e salva essas informações no banco de dados;
- GET `/ceps/busca/cep/:cep`: recebe o número do CEP via _path param_ e retorna o logradouro referente ao CEP consultado;
- GET `/ceps/busca/logradouro/:logradouro`: recebe o logradouro via _path param_ e retorna o número do CEP referente.

Para cada _endpoint_ foi implementado um [conjunto de testes](./cypress/e2e/index.cy.ts) que verifica se as respostas estão de acordo com as especificações. Um detalhe importante é que todas as requisições que envolvem CEPs utilizam a máscara #####-### para garantir que o formato de oito dígitos seja seguido.

Este foi o quarto repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/refactored-contact-book-api) | [Próximo repositório &rarr;](https://github.com/mdccg/decoupled-contact-book-api) |
|-|-|

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Back-end | [Express.js](https://expressjs.com/pt-br/) |
| Framework de teste | [Cypress](https://www.cypress.io/) |
| Virtualização de banco de dados | [Docker](https://www.docker.com/) |
| Banco de dados | [MongoDB](https://www.mongodb.com/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_ Docker com o respectivo banco de dados virtualizado. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

Mas, não se preocupe. As tuplas inseridas no banco de dados não serão deletadas com a derrubada do _container_.

5. Execute o seguinte comando para iniciar a API:

Para npm:

```console
$ npm run dev
```

Para Yarn:

```console
$ yarn dev
```

6. Por fim, execute o seguinte comando para testar a API iniciada:

Para npm:

```console
$ npm run cy:run
```

Para Yarn:

```console
$ yarn cy:run
```
