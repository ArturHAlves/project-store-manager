# Store Manager - Gerenciador de Produtos e Vendas


## :page_with_curl: Sobre

Projeto Store Manager, desenvolvido por [Artur Henrique](https://github.com/ArturHAlves)
no final da [Seção 5 - Arquitetura de Software: Model, Service e Controller](https://github.com/ArturHAlves/trybe-exercises/tree/main/03-Modulo-Back-End/Secao-05-Arquitetura-de-Software)
no curso de Desenvolvimento Web da Trybe. Eu fui aprovado com 100% dos requisitos. 

## Proposta

A proposta do projeto é criar uma API RESTful para o gerenciamento de produtos e vendas em um e-commerce. A aplicação realiza operações CRUD (Create, Read, Update, Delete) em um banco de dados MySQL, através de um back-end desenvolvido em Node.js. Tanto o back-end quanto o banco de dados são executados em containers orquestrados pelo Docker Compose. Para garantir a qualidade do sistema, são utilizadas as ferramentas CHAI, Mocha e Sinon para a realização de testes automatizados. Além disso, a aplicação adota a arquitetura de software MSC (Model, Service e Controller) para facilitar a organização e manutenção do código.


## :hammer_and_wrench: Tecnologias Utilizadas:

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* MySQL
* Node.js
* Express
* Docker
* Docker-compose
* EsLint
* Testes: CHAI - MOCHA - SINON


## Pré-requisito

Antes de executar a API localmente, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
Docker e Docker Compose
MySQL Server


## Configuração do Ambiente 

* Clone o repositório do GitHub:

`git clone https://github.com/<your-username>/project-store-manager.git`

* Instale as dependências necessárias usando o npm:

`npm install`

* Crie um banco de dados MySQL e execute as migrações e as sementes para a aplicação:

`npm run migration && npm run seed`

* Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como as credenciais do banco de dados e configurações específicas da aplicação.

    `DB_HOST=localhost
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=node_store_manager`

* Substitua `suasenha` pela senha real do usuário root do MySQL.


## Uso

Para iniciar a aplicação Node Store Manager, execute o seguinte comando:

`npm run dev`

Isso iniciará o servidor em http://localhost:3001.
