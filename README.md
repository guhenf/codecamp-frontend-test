<h1 align="center">Codeleap Network</h1>

Esse projeto consiste em uma aplicacao frontend de postagens de comentarios utilizando uma Api somente para os posts, ou seja, nao criamos ou armazenamos usuarios nela.

## Recursos utilizados no desenvolvimento:

- Typecript;
- Axios
- DayJS
- Styled-components
- React-router-dom
- ViteJS

## 🛠️ Excutar e testar o projeto:

- Nao esqueca de rodar o comando `npm` para instalar as dependencias antes de testar a aplicacao.
- `npm run dev` para manipulacoes no Insomnia ou Browser.

## Testando a Aplicação:

- Para SignUp (nao utilizando rota alguma): `{"username": string}`

NA UTILIZACAO DE ROTAS:

- Para postagem: `{ "title": string, "content": string, "username": string}`

- Para edicao do usuario: `{ "title": string, "content": string }`

- Para a delecao, passamos o Id do post por params.

ROTAS:

| ROTA         | HTTP(Verbo) | Descrição            |
| ------------ | ----------- | -------------------- |
| /careers     | POST        | Postar um comentario |
| /careers     | GET         | Listar os posts      |
| /careers/:id | PUT         | Atualizar Por Id     |
| /careers/:id | DELETE      | Excluir Por Id       |

### Obrigado por acessar. Se encontrar falhas nao esqueca de me contatar.
