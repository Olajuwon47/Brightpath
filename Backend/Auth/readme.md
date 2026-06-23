# 🛡️ TPN School – Auth Backend Service

This is the **Authentication Service** for the TPN School project, built with:

* **Node.js + Express**
* **TypeScript**
* **PostgreSQL** via Prisma ORM
* **Redis** for caching
* **JWT** for session/token-based authentication
* **OAuth2 (Google, Microsoft, Facebook, Apple)** planned

---

## 📁 Folder Structure

```
tpnschool/backend/auth/
├── src/
│   ├── config/         # Database, Redis, and environment config
│   ├── controllers/    # Route logic (signup, login, etc.)
│   ├── middlewares/    # Auth guards, validators, etc.
│   ├── models/         # Prisma schema & DB logic
│   ├── routes/         # API routes
│   ├── services/       # Business logic (hashing, JWT, social auth)
│   ├── utils/          # Helpers (e.g., Redis wrapper, email sender)
│   ├── types/          # Custom TypeScript types/interfaces
│   └── index.ts        # App entry point
├── .env                # Environment variables
├── tsconfig.json       # TypeScript config
├── package.json        # Project metadata and scripts
└── README.md           # Project instructions
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have the following installed:

* **Node.js** (v18+ recommended)
* **PostgreSQL**
* **Redis**
* **Git**

---

### 2️⃣ Create PostgreSQL Database and User

Before setting up the `.env`, make sure the database and user exist:

#### a) Local PostgreSQL

```bash
sudo -u postgres psql
```

Then run:

```sql
-- Optional: clean up if needed
DROP USER IF EXISTS exampleuser;
DROP DATABASE IF EXISTS exampleauth_db;

-- Create user and DB
CREATE USER exampleuser WITH PASSWORD 'ExamplePass123';
CREATE DATABASE exampleauth_db OWNER exampleuser;
GRANT ALL PRIVILEGES ON DATABASE exampleauth_db TO exampleuser;
ALTER USER exampleuser CREATEDB;

-- Exit
\q
```

#### b) Docker PostgreSQL

```bash
docker exec -it <container_name_or_id> psql -U postgres
-- Then run the same SQL above
```

---

### 3️⃣ Environment Setup

Create a `.env` file at the root of `auth/`:

```env
DATABASE_URL=postgresql://exampleuser:ExamplePass123@localhost:5432/exampleauth_db
JWT_SECRET=your_jwt_secret_here
REDIS_URL=redis://localhost:6379
```

Update values accordingly.

---

### 4️⃣ Install Dependencies

```bash
cd tpnschool/backend/auth
npm install
```

---

### 5️⃣ Prisma Setup and Migration

📌 **Important: Create the database before running the commands below.**

```bash
# Initialize Prisma (run once if not already initialized)
npx prisma init --datasource-provider postgresql

# Generate Prisma client
npx prisma generate

# Run first migration (development)
npx prisma migrate dev --name init

# Run production migration if needed
npx prisma migrate deploy
```

More help:

* [Fix shadow DB errors](https://satisfyhost.com/blog/prisma-migrate-could-not-create-the-shadow-database/)
* [Prisma Migrate Docs](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database)

---

### 6️⃣ Run Development Server

```bash
npm run dev
```

---

## 🏗 Available Scripts

| Command           | Description                             |
| ---------------- | --------------------------------------- |
| `npm run dev`     | Starts the dev server with hot reload   |
| `npm run build`   | Compiles TypeScript to JavaScript       |
| `npm start`       | Runs compiled code from `dist/index.js` |

---

## ✅ Features

* ✅ Secure user **signup/login**
* ✅ Session caching with **Redis** (expires in 5 days)
* ✅ Support for **social login** (Google, Microsoft, Facebook, Apple)
* ✅ Clean and scalable folder structure
* ✅ Written in **TypeScript**

---

## 🤝 Contribution Guide

1. Clone the repo:

```bash
git clone <repo-url>
cd tpnschool/backend/auth
```

2. Create a new branch:

```bash
git checkout -b feature/my-feature
```

3. Follow the folder structure and TypeScript conventions

4. Push and create a Pull Request

---

## 📧 Contact

For technical issues, questions, or contributions, reach out to:

**Samuel Effiong**  
Software Team Lead – TPN Schools  
📧 [samueleffiong685@gmail.com](mailto:samueleffiong685@gmail.com)  
📱 [Insert WhatsApp Number or Group Link]
