# TPN Schools Platform

Welcome to the **TPN Schools Platform** monorepo! This repository contains both the **frontend** and **backend** codebases, along with everything you need to get started.

```
tpnschool/
├─ backend/       # Express + TypeScript API, PostgreSQL, MongoDB & Redis
├─ frontend/      # Next.js + TypeScript, Framer Motion & shadcn/ui
└─ README.md      # You are here!

```

---

## 🚀 Project Overview

TPN Schools is a volunteer‑built web application to manage school operations:

- **User Management** (students, teachers, admins)  
- **Course & Class Scheduling**  
- **Attendance Tracking**  
- **Interactive Dashboards & Reports**

**Tech Stack**  

- **Frontend:** Next.js, React, TypeScript  
- **Animations:** Framer Motion ([docs](https://motion.dev/docs/react-quick-start))  
- **UI Components:** shadcn/ui ([install](https://ui.shadcn.com/docs/installation/next))  
- **Backend:** Express.js, TypeScript  
- **Databases:** PostgreSQL (relational), MongoDB (NoSQL), Redis (caching)  
- **DevOps:** Docker, GitHub Actions (CI/CD)

---

## 🔧 Prerequisites

- **Node.js** (LTS recommended)  
- **npm** (bundled with Node.js)  
- **Docker & Docker Compose** (for local databases)  

---

## 🏁 Getting Started

1. **Clone the repo**  

   ```bash
   git clone https://github.com/your‑org/tpnschool.git
   cd tpnschool
   ```

2. **Start databases (optional but recommended)**  

   ```bash
   docker-compose up -d
   ```

   This brings up PostgreSQL, MongoDB, and Redis locally.

---

### ▶️ Run the Backend

1. ```bash
   cd backend
   npm install
   npm run dev
   ```

2. The API will be running at `http://localhost:4000` (default).

---

### ▶️ Run the Frontend

1. ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. The app will be running at `http://localhost:3000`.

---

## 🗂 Directory Structure

### **backend/**

```
backend/
├─ src/
│  ├─ controllers/      # Route handlers
│  ├─ models/           # DB schemas (TypeORM & Mongoose)
│  ├─ routes/           # Express route definitions
│  ├─ services/         # Business logic & Redis caching
│  └─ utils/            # Helpers, middleware, config
├─ .env.example         # Env vars template
├─ ormconfig.ts         # TypeORM config
└─ package.json
```

### **frontend/**

```
frontend/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ pages/            # Next.js pages & API routes
│  ├─ styles/           # Global & component CSS
│  └─ utils/            # Helpers, API clients
├─ next.config.js       # Next.js config
├─ tailwind.config.js   # Tailwind setup (if used)
└─ package.json
```

---

## 🤝 Contributing & Support

- **Non‑technical contributors** can help by:
  - Reviewing copy/text  
  - Testing flows & reporting bugs  
  - Suggesting UX improvements  

- **Developers** should:
  1. Fork & branch: `git checkout -b feat/your-feature`  
  2. Commit & push to your fork  
  3. Open a Pull Request against `main`

Please follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📞 Contacts

- **Team Lead:** Samuel Effiong – <samueleffiong685@gmail.com>  
- **UI/UX Lead:** [Name] – [email]  
- **DevOps Lead:** [Name] – [email]  

Thank you for joining the TPN Schools volunteer effort! Let’s build something impactful together. 🎓✨

[live line:](https://tpn-eosin.vercel.app/home)
