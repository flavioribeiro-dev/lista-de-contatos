Projeto desenvolvido inicialmente a partir das orientações de cursos sobre NodeJS @b7web

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

## Tecnologias utilizadas
- Node com Express

## Evolução da Aprendizagem
1. Inicialização do projeto com instalação das dependências
2. Estruturação das Rotas GET, POST e DELETE
3. Aplicação do padrão MVC com utilização de Funções
4. Transição das operações do MVC com a utilização de Services (refatoração)