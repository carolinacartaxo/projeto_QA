# language: pt

Funcionalidade: Busca no portal do IBGE
  Como cidadão
  Quero usar a busca do portal
  Para encontrar conteúdos relacionados a um tema estatístico

  Cenário: Buscar por população no portal
    Dado que abro o portal do IBGE para pesquisar
    Quando faço uma busca pelo termo "população"
    Então devo ser direcionado para a página de resultados da busca
    E a busca deve manter o termo "população" na URL
