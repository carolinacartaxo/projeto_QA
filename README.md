# Automação de Testes E2E com Cypress + Cucumber

Projeto apresentado para obtenção de nota na disciplina Qualidade de Software  
Curso: IESP - Sistemas para Internet  
Aluna: Ana Carolina da Matta Cartaxo 
Turma: P5A - Noite  

Este projeto realiza automação de testes end-to-end (E2E) utilizando Cypress com Cucumber (BDD) no portal do IBGE.

Os testes validam funcionalidades como abertura do painel de indicadores, busca interna, opção de idioma e links do menu principal.

---

## Tecnologias utilizadas

- Cypress
- Cucumber (BDD - Gherkin)
- JavaScript
- Node.js

---

## Estrutura do projeto

```txt
cypress/
├── e2e/
│   ├── features/        # Arquivos .feature com cenários em Gherkin
│   └── steps/           # Implementação dos steps com Cypress + Cucumber
├── support/
│   ├── commands.js      # Comandos customizados do Cypress
│   └── e2e.js           # Configurações globais do Cypress
├── cypress.config.js
├── package.json
└── README.md
```

---

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm

Verifique com:

```bash
node -v
npm -v
```

---

## Instalação

```bash
git clone https://github.com/carolinacartaxo/projeto_QA.git

cd projeto_QA

npm install
```

---

## Como executar os testes

Abrir o Cypress:

```bash
npm run cy:open
```

Executar em modo headless:

```bash
npm run cy:run
```

Caso o Cypress apresente erro relacionado ao Electron no terminal, execute:

```bash
env -u ELECTRON_RUN_AS_NODE npm test
```

---

## Cenários automatizados

1) Qual é o app?  
- Portal do IBGE (https://www.ibge.gov.br/)

2) Iremos testar o que?
- Painel de indicadores -> Abrir o painel de indicadores pelo menu
- Busca interna -> Pesquisar por um termo e validar redirecionamento
- Idioma -> Alternar o portal para espanhol e validar a alteração
- Menu principal -> Clicar em links importantes usando Esquema do Cenário

3) Cenários

- Cenário 1  
**Funcionalidade:** Menu de indicadores do portal do IBGE  
**Cenário:** Abrir o painel de indicadores pelo menu

- Cenário 2  
**Funcionalidade:** Busca no portal do IBGE  
**Cenário:** Buscar por população no portal

- Cenário 3  
**Funcionalidade:** Opção de idioma no portal do IBGE  
**Cenário:** Modificar o idioma para espanhol

- Esquema de Cenário  
**Funcionalidade:** Menu principal do portal do IBGE  
**Esquema do Cenário:** Validar destino de item do menu

4) Casos de teste

**CT01 - Abrir o painel de indicadores pelo menu**  
Dado que estou na página inicial do IBGE  
Quando clico no menu toggle  
E clico em "Painel de Indicadores"  
Então devo visualizar "Painel de indicadores"

**CT02 - Buscar por população no portal**  
Dado que abro o portal do IBGE para pesquisar  
Quando faço uma busca pelo termo "população"  
Então devo ser direcionado para a página de resultados da busca  
E a busca deve manter o termo "população" na URL

**CT03 - Modificar o idioma para espanhol**  
Dado que estou na página inicial do IBGE  
Quando abro a lista de outros idiomas  
E seleciono o idioma "Español"   
Então devo visualizar o portal em espanhol

**CT04 - Validar destinos de itens do menu**

**CT04.1 - Validar destino do item População**  
Dado que consulto o menu principal do IBGE  
Quando clico no item "População"  
Então devo ser direcionado para "/estatisticas/sociais/populacao.html"

**CT04.2 - Validar destino do item Educação**  
Dado que consulto o menu principal do IBGE  
Quando clico no item "Educação"  
Então devo ser direcionado para "/estatisticas/sociais/educacao.html"

---
