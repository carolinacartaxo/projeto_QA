# language: pt

Funcionalidade: Opção de idioma no portal do IBGE
  Como visitante internacional
  Quero alternar o idioma do portal
  Para visualizar o conteúdo em espanhol e voltar para português

  Cenário: Alternar entre português e espanhol
    Dado que estou na página inicial do IBGE
    Quando abro a lista de outros idiomas
    E seleciono o idioma "Español"
    Então devo visualizar o portal em espanhol
