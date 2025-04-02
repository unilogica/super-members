
# Super Members - Plataforma Educacional

Uma plataforma educacional multitenancy para criação e venda de cursos online.

## Pré-requisitos

- Python 3.11+
- PostgreSQL (Replit PostgreSQL Database)
- Node.js e npm (para o frontend)
- Docker e Docker Compose (para desenvolvimento local)

## Execução Local com Docker

Para executar o projeto localmente com Docker:

```bash
# Construir e iniciar os containers
docker-compose up --build

# Acessar o backend em http://localhost:5000
# Acessar o frontend em http://localhost:3000
```

## Configuração do Ambiente

### Banco de Dados PostgreSQL

Este projeto usa PostgreSQL. No Replit, você pode configurar facilmente:

1. Abra uma nova aba no Replit e digite "Database"
2. Clique em "create a database"
3. Na seção "env", você verá as informações de conexão do banco de dados

### Variáveis de Ambiente

É necessário configurar as seguintes variáveis de ambiente:

```
# Variáveis do PostgreSQL (disponíveis após criar o banco)
REPLIT_DB_NAME=seu_db_name
REPLIT_DB_USER=seu_db_user
REPLIT_DB_PASS=sua_db_pass
REPLIT_DB_HOST=seu_db_host
REPLIT_DB_PORT=5432

# Chave secreta do Django
SECRET_KEY=chave_secreta_django
```

Para configurar no Replit:
1. Clique no ícone de cadeado na barra lateral para abrir o gerenciador de "Secrets"
2. Adicione cada variável de ambiente necessária

## Instalação

### Backend (Django)

As dependências do Python são gerenciadas pelo pyproject.toml. O Replit instalará automaticamente todas as dependências listadas.

### Frontend (React)

Navegue até a pasta do frontend e instale as dependências:

```bash
cd frontend
npm install
```

## Executando o Projeto

O projeto já está configurado com workflows no Replit para facilitar a execução:

### Execução Completa (Backend + Frontend)

Clique no botão "Run" no Replit para iniciar o workflow "Dev" que executa ambos backend e frontend em paralelo.

### Somente Backend

Para executar apenas o backend:

```bash
cd backend
python main.py migrate_schemas --shared # Executa migrações
python main.py runserver 0.0.0.0:5000 # Inicia o servidor Django
```

### Somente Frontend

Para executar apenas o frontend:

```bash
cd frontend
npm start
```

## Estrutura do Projeto

### Backend (Django)

```
backend/
├── core/           # Configuração do Django
├── courses/        # App de cursos com modelos em arquivos separados
├── subscriptions/  # App de assinaturas
├── tenant/         # App para configuração multitenancy
└── users/          # App de usuários
```

### Frontend (React)

```
frontend/
└── src/
    ├── components/  # Componentes reutilizáveis
    ├── contexts/    # Contextos React (Auth, etc)
    ├── pages/       # Páginas da aplicação
    └── services/    # Serviços (API, etc)
```

## Multitenancy

Este projeto utiliza django-tenants para implementar multitenancy. Cada cliente (tenant) tem seu próprio subdomínio e schema isolado no banco de dados PostgreSQL.
