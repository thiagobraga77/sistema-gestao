# Super-gestão 📈

Um sistema de gestão empresarial (ERP/CRM) completo para otimizar o controle de **clientes**, **pedidos**, **fornecedores** e **produtos**.

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Começando](#-começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [📬 Contato](#-contato)

---

## 📝 Sobre o Projeto

O **Super-gestão** nasceu da necessidade de centralizar e simplificar a administração de pequenas e médias empresas. Em vez de usar múltiplas planilhas ou sistemas desconectados, esta plataforma oferece uma visão unificada de todo o ciclo de negócios.

A plataforma inclui módulos essenciais para o dia a dia da operação:
* **Home:** Um painel (dashboard) com os principais indicadores.
* **Login:** Sistema de autenticação e segurança.
* **Clientes:** Cadastro e gerenciamento de clientes.
* **Fornecedores:** Cadastro e gerenciamento de fornecedores.
* **Produtos:** Controle de estoque e catálogo de produtos.
* **Pedidos:** Gestão de pedidos de venda e compras.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído (ou pode ser construído) com as seguintes tecnologias, baseando-se em um stack moderno e robusto:

- **Back-end:**
  - [PHP](https://www.php.net/)
  - [Laravel](https://laravel.com/)
  - [Composer](https://getcomposer.org/)

- **Front-end:**
  - [Vue.js](https://vuejs.org/) (ou [Blade](https://laravel.com/docs/blade))
  - [TypeScript](https://www.typescriptlang.org/) (Opcional)
  - [Vite](https://vitejs.dev/) (ou Laravel Mix)
  - [Node.js](https://nodejs.org/)

- **Banco de Dados:**
  - Compatível com MySQL, PostgreSQL, SQLite, etc.

---


## 🚀 Começando

Para obter uma cópia local e executá-la, siga estes passos simples.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:
- [PHP](https://www.php.net/downloads.php) (versão recomendada pelo Laravel)
- [Composer](https://getcomposer.org/download/)
- [Node.js e NPM](https://nodejs.org/en/)
- Um servidor de banco de dados (ex: MySQL, MariaDB, PostgreSQL).

### Instalação

1.  **Clone o repositório** 
    ```sh
    git clone https://github.com/thiagobraga77/sistema-gestao.git && cd sistema-gestao
    ```

2.  **Instale as dependências do PHP**
    ```sh
    composer install
    ```

3.  **Instale as dependências do Node.js**
    ```sh
    npm install
    ```

4.  **Configure o ambiente**
    * Copie o arquivo de ambiente de exemplo:
        ```sh
        cp .env.example .env
        ```
    * Gere a chave da aplicação:
        ```sh
        php artisan key:generate
        ```

5.  **Configure o Banco de Dados**
    * Abra o arquivo `.env` que você acabou de criar.
    * Localize as linhas que começam com `DB_` e edite-as com as informações do seu banco de dados local.
    * **Exemplo para MySQL:**
        ```env
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=super_gestao
        DB_USERNAME=root
        DB_PASSWORD=sua_senha_segura
        ```
    > **Nota:** Você precisa criar o banco de dados (`super_gestao`, neste exemplo) manualmente no seu gerenciador (MySQL, PostgreSQL, etc.) antes de prosseguir.

6.  **Execute as Migrations** (para criar as tabelas do banco)
    ```sh
    php artisan migrate
    ```
    *Opcional: Execute as seeders para popular o banco com dados de exemplo:*
    ```sh
    php artisan db:seed
    ```

7.  **Compile os assets do front-end**
    * Para ambiente de desenvolvimento (com hot-reloading):
        ```sh
        npm run dev
        ```
    * Para ambiente de produção:
        ```sh
        npm run build
        ```

8.  **Inicie o servidor de desenvolvimento**
    ```sh
    php artisan serve
    ```
    Agora você pode acessar o projeto em `http://localhost:8000`.


## 📬 Contato

Thiago Braga - [Linkedin(https://www.linkedin.com/in/thiago-braga-433a43358/)

Link do Projeto: [https://github.com/thiagobraga77/sistema-gestao](https://github.com/thiagobraga/sistema-gestao)
