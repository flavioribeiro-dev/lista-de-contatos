Projeto desenvolvido inicialmente a partir das orientações do curso

# API DE LISTA-DE-CONTATOS
- Criando uma Lista de Contatos em um Arquivo .txt

## Funcionalidades
- Criar um novo Contato (o Nome não pode ter menos de 2 caracteres)
- Listar Contatos
- Excluir um Contato

## Planejamento de Rotas:
- Criar um novo contato:    POST /contato   { nome: "Fulano" }
- Listar Contatos:          GET /contatos
- Excluir Contatos:         DELETE /contato (queryString)
