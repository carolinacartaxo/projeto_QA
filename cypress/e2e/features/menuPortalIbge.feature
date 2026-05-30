# language: pt

Funcionalidade: Menu principal do portal do IBGE
  Como cidadão
  Quero identificar atalhos importantes no menu
  Para navegar por áreas diferentes do portal

  Esquema do Cenário: Validar destino de item do menu
    Dado que consulto o menu principal do IBGE
    Quando clico no item "<item>"
    Então devo ser direcionado para "<destino>"

    Exemplos:
      | item      | destino                              |
      | População | /estatisticas/sociais/populacao.html |
      | Educação  | /estatisticas/sociais/educacao.html  |
