# language: pt

Funcionalidade: Menu de indicadores do portal do IBGE
  Como cidadão
  Quero abrir o painel de indicadores do portal
  Para acessar rapidamente os dados principais do IBGE

  Cenário: Abrir o painel de indicadores pelo menu
    Dado que estou na página inicial do IBGE
    Quando clico no menu toggle
    E clico em "Painel de Indicadores"
    Então devo visualizar "Painel de indicadores"
