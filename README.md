# Merigold Potion Shop

Projeto simples de loja de poções para a disciplina de desenvolvimento web. Contém um backend em Node.js usando Express e Sequelize (SQLite) e um frontend em React com Vite.

## Estrutura

- `backend/` — servidor Express, modelos Sequelize e seed inicial.
- `frontend/` — aplicativo React (Vite) com páginas públicas e painel administrativo.

## Pré-requisitos

- Node.js (versão 16+ funciona; projeto testado em Node 20).
- npm

## Instalação e execução

1. Inicie o backend:

```bash
cd backend
npm install
# Inicia o servidor (porta padrão 3001)
node src/server.js
```

O backend cria/sincroniza o banco SQLite (`backend/src/database.sqlite`) e aplica um seed inicial caso o banco esteja vazio.

2. Inicie o frontend:

```bash
cd frontend
npm install
npm run dev
```

O Vite exibirá a URL local (ex.: `http://localhost:5173` ou outra porta disponível). Abra essa URL no navegador.

## Como usar

- Página pública (loja): `/` — exibe as poções cadastradas com nome, imagem, descrição e preço. Botão "Comprar" é apenas visual (sem pagamento).
- Painel administrativo: `/admin` — formulário para criar novas poções (nome, URL da imagem, descrição, preço) e lista para remover poções.

Ao criar ou remover poções no painel admin, a página principal atualiza automaticamente se estiver aberta.

## API

- `GET /api/potions` — lista poções
- `POST /api/potions` — cria poção (JSON: `name`, `description`, `image`, `price`)
- `DELETE /api/potions/:id` — remove poção

Exemplo de criação via `curl`:

```bash
curl -X POST http://localhost:3001/api/potions \
  -H 'Content-Type: application/json' \
  -d '{"name":"Poção Teste","description":"Descrição","image":"https://...","price":99.9}'
```

## Notas

- O projeto salva apenas a URL da imagem, não faz upload de arquivos.
- O banco é um arquivo SQLite em `backend/src/database.sqlite`.
- Para desenvolvimento, é recomendado usar `nodemon` no backend para reiniciar automaticamente.

