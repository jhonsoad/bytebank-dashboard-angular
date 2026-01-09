# 🚀 ByteBank Dashboard Angular (MFE)

## 🎯 Sobre o Projeto

Este repositório contém o projeto **bytebank-dashboard-angular**, um Micro Frontend (MFE) desenvolvido para compor a aplicação financeira **ByteBank**. Este módulo é responsável por gerenciar a visão principal do usuário, oferecendo um dashboard interativo, controle de transações e acesso a serviços financeiros essenciais.

Ele foi projetado para operar de forma federada, utilizando **Native Federation**, o que permite que ele seja carregado dinamicamente por uma aplicação Host ou executado isoladamente para desenvolvimento e testes.

### Responsabilidades Chave deste MFE:

* **Gestão de Dashboard:** Exibe o saldo atualizado, extrato de movimentações e gráficos ou resumos financeiros na página de Início.
* **Operações Financeiras:** Gerencia as interfaces para visualização de **Investimentos**, realização de **Transferências** e acesso a **Outros Serviços**.
* **CRUD de Transações:** Oferece funcionalidades completas para criar, editar e excluir transações financeiras através de modais interativos.
* **Exposição de Rotas e Componentes:** Através do `federation.config.js`, este projeto expõe suas rotas (`./routes`) e o componente principal (`./Component`), facilitando a orquestração pelo Host.

## 🏛️ Arquitetura e Tecnologias

A arquitetura segue o padrão de **Micro Frontends**, focada na modularidade e independência. A comunicação e o compartilhamento de dependências são gerenciados pelo `native-federation`, garantindo performance e evitando duplicação de bibliotecas.

### Tecnologias Principais Utilizadas:

* **Angular v19.0.0:** Framework principal, utilizando os recursos mais recentes de performance e reatividade.
* **Native Federation (@angular-architects/native-federation):** Solução moderna para Module Federation que dispensa o uso complexo do Webpack, utilizando padrões nativos do navegador (ES Modules).
* **RxJS:** Gerenciamento de estado e fluxos de dados assíncronos, essencial para a comunicação com APIs e reatividade dos componentes.
* **Jest:** Framework de testes unitários configurado para garantir a qualidade e estabilidade do código (`test`, `test:ci`, `test:coverage`).
* **TypeScript:** Superset do JavaScript para tipagem estática e segurança no desenvolvimento.

## 📁 Estrutura de Pastas e Organização

A estrutura do projeto é organizada por domínios e tipos de arquivos, facilitando a escalabilidade.

```text
src/
└── app/
    ├── components/
    │   ├── common/             # Componentes reutilizáveis (UI Kit)
    │   │   ├── button/
    │   │   ├── dropdown/
    │   │   ├── input/
    │   │   └── modal/
    │   └── dashboard/          # Componentes de negócio do Dashboard
    │       ├── balance-card/
    │       ├── statement-card/
    │       ├── statement-list/
    │       ├── transaction-form/
    │       ├── sidebar/
    │       ├── delete-transaction-modal/
    │       └── edit-transaction-modal/
    ├── core/
    │   └── auth-interceptor/   # Interceptadores HTTP (ex: Token Auth)
    ├── pages/                  # Rotas da aplicação
    │   └── dashboard/
    │       ├── inicio/
    │       ├── investimentos/
    │       ├── transferencias/
    │       └── outros-servicos/
    ├── services/               # Comunicação com API
    │   ├── account.service.ts
    │   ├── delete-transaction.service.ts
    │   ├── post-saldo-conta.service.ts
    │   └── put-saldo-conta.service.ts
    ├── shared/                 # Recursos compartilhados
    │   ├── design-system/      # CSS Global (colors, typography, spacing)
    │   ├── enum/
    │   ├── interfaces/
    │   └── pipes/              # Pipes utilitários (img-url, replace-comma)
    └── environments/           # Variáveis de ambiente
  ```

  ### Detalhamento dos Arquivos e Diretórios:

* `src/app/`: O diretório principal que encapsula a lógica central da aplicação e seus componentes.
    * `components/`: Contém componentes reutilizáveis, categorizados para facilitar a localização e o reuso.
        * `dashboard/`: Componentes específicos para a área do dashboard, como `sidebar`, `balance-card`, `statement-list`, `transaction-form`, além dos modais `delete-transaction-modal` e `edit-transaction-modal`.
        * `common/`: Componentes genéricos e de uso comum, como `button`, `input`, `dropdown` e `modal`, que compõem o UI Kit da aplicação.
    * `core/`: Abriga serviços e lógicas de baixo nível, como o `AuthInterceptor`, responsável por manipular requisições HTTP.
    * `pages/`: Agrupa os componentes que representam rotas da aplicação.
        * `dashboard/`: Contém as páginas principais como `InicioComponent` (visão geral), `Investimentos`, `Transferencias` e `Outros Serviços`.
    * `services/`: Contém os serviços de comunicação com a API, incluindo `AccountService` para dados da conta e serviços específicos para transações como `DeleteTransactionService`, `PostSaldoContaService` e `PutSaldoContaService`.
    * `shared/`: Armazena recursos compartilhados.
        * `design-system/`: Arquivos CSS globais para cores, tipografia, espaçamento e breakpoints.
        * `interfaces/`: Modelos de dados como `Account` e `Finance`.
        * `pipes/`: Utilitários de transformação de dados, como `ImgUrlPipe` e `ReplaceCommaPipe`.
* `federation.config.js`: Arquivo de configuração do `native-federation`, definindo que este MFE expõe as rotas (`./routes`) e o componente principal (`./Component`).
* `package.json`: Lista as dependências e scripts do projeto, configurado para Angular 19.

## ⚙️ Como Começar

Para configurar e executar o projeto localmente, siga as instruções abaixo.

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado (versão LTS recomendada compatível com Angular 19).

### Instalação

1.  **Clone o repositório e navegue até a pasta do projeto.**
2.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará acessível em seu navegador (padrão: http://localhost:4202 ou a porta definida).

### Testes

Para executar os testes unitários com Jest:

```bash
npm test
```
Para rodar os testes com relatório de cobertura:

```bash
npm run test:coverage
```

## 🤝 Integração (Federation)

Este projeto atua como um Micro Frontend remoto.

Nome: bytebank-dashboard-angular

## Exposes:

`./routes: ./src/app/app.routes.ts`
`./Component: ./src/app/app.component.ts`
