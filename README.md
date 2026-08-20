<div align="center">

<!-- Animated typing header — plays automatically on load -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=2E9EF7&center=true&vCenter=true&width=650&lines=Zentrust;Global+B2B+Data+Exchange+Platform;Secure.+Consent-Driven.+API-First." alt="Typing SVG" />

<br/>

<!-- Language / tech badges -->
<img src="https://img.shields.io/badge/TypeScript-97.9%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/CSS-1.4%25-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-0.7%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

<br/><br/>

<img src="https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" />
<img src="https://img.shields.io/badge/Auth-Auth0-EB5424?style=flat-square&logo=auth0&logoColor=white" />
<img src="https://img.shields.io/badge/Payments-Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white" />
<img src="https://img.shields.io/badge/Hosting-Vercel%20%7C%20Railway-black?style=flat-square&logo=vercel&logoColor=white" />

<br/><br/>

<img src="https://img.shields.io/github/stars/willy7890/Zentrust?style=social" />
<img src="https://img.shields.io/github/forks/willy7890/Zentrust?style=social" />
<img src="https://img.shields.io/badge/License-Proprietary-lightgrey?style=flat-square" />
<img src="https://img.shields.io/badge/Team-4%20Members-blueviolet?style=flat-square" />

</div>

<br/>

## About

**Zentrust** securely connects businesses of all sizes with financial institutions (banks, credit unions, insurtechs) worldwide through a clean API. The platform enables controlled sharing of normalized financial data based on granular, user-managed consent.

<br/>

<div align="center">
<img src="https://img.shields.io/badge/Business%20Portal-live-2E9EF7?style=for-the-badge" />
<img src="https://img.shields.io/badge/Institution%20Dashboard-live-2E9EF7?style=for-the-badge" />
</div>

<br/>

## Table of Contents

- [Project Overview](#project-overview)
- [Language Breakdown](#language-breakdown)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow-4-collaborators)
- [Essential Git Commands](#essential-git-commands)
- [Team Guidelines](#team-collaboration-guidelines)
- [License](#license)

<br/>

## Project Overview

| Area | Description |
|---|---|
| **Frontend** | Next.js 14 (App Router) – Business Portal + Institution Dashboard |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL (Supabase) |
| **Authentication** | Auth0 |
| **Payments** | Stripe |
| **Banking Data** | Plaid + local Open Banking providers |
| **Accounting** | QuickBooks API, Xero |
| **KYC** | Persona |
| **Hosting** | Vercel (Frontend) + Railway (Backend) |

<br/>

## Language Breakdown

<div align="center">

```
TypeScript ████████████████████████████████████████ 97.9%
CSS        █                                         1.4%
JavaScript ▏                                         0.7%
```

</div>

This project is built almost entirely in **TypeScript**, across both the Next.js frontend and the Express backend, with a thin layer of CSS for styling and a small amount of plain JavaScript for tooling/config.

<br/>

## Project Structure

<details>
<summary><b>Click to expand full monorepo tree</b></summary>

```
zentrust/
├── apps/
│   ├── frontend/                          # Next.js 14 (Business + Institution Portals)
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── layout.tsx
│   │   │   ├── (business)/                # Business Portal
│   │   │   │   ├── dashboard/
│   │   │   │   ├── onboarding/
│   │   │   │   ├── profile/
│   │   │   │   ├── consent/
│   │   │   │   ├── financial-health/
│   │   │   │   ├── integrations/
│   │   │   │   └── layout.tsx
│   │   │   ├── (institution)/             # Institution Dashboard
│   │   │   │   ├── dashboard/
│   │   │   │   ├── search/
│   │   │   │   ├── profiles/
│   │   │   │   ├── api-keys/
│   │   │   │   ├── billing/
│   │   │   │   └── layout.tsx
│   │   │   ├── api/                       # Next.js API routes (proxy)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── business/
│   │   │   ├── institution/
│   │   │   ├── consent/
│   │   │   ├── charts/
│   │   │   └── layout/
│   │   ├── lib/
│   │   │   ├── auth.ts
│   │   │   ├── api.ts
│   │   │   ├── supabase.ts
│   │   │   └── utils.ts
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── public/
│   │   ├── middleware.ts
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── .env.local
│   │
│   └── backend/                           # Node.js + Express
│       ├── src/
│       │   ├── config/
│       │   │   ├── index.ts
│       │   │   ├── database.ts
│       │   │   ├── auth0.ts
│       │   │   └── stripe.ts
│       │   ├── middleware/
│       │   │   ├── auth.ts
│       │   │   ├── role.ts
│       │   │   ├── rateLimit.ts
│       │   │   └── errorHandler.ts
│       │   ├── routes/
│       │   │   ├── auth.routes.ts
│       │   │   ├── business.routes.ts
│       │   │   ├── institution.routes.ts
│       │   │   ├── consent.routes.ts
│       │   │   ├── profile.routes.ts
│       │   │   ├── integration.routes.ts
│       │   │   ├── billing.routes.ts
│       │   │   └── admin.routes.ts
│       │   ├── controllers/
│       │   │   ├── business.controller.ts
│       │   │   ├── institution.controller.ts
│       │   │   ├── consent.controller.ts
│       │   │   ├── profile.controller.ts
│       │   │   ├── integration.controller.ts
│       │   │   └── billing.controller.ts
│       │   ├── services/
│       │   │   ├── profileEngine.service.ts
│       │   │   ├── plaid.service.ts
│       │   │   ├── quickbooks.service.ts
│       │   │   ├── xero.service.ts
│       │   │   ├── persona.service.ts
│       │   │   ├── stripe.service.ts
│       │   │   ├── consent.service.ts
│       │   │   └── notification.service.ts
│       │   ├── models/
│       │   ├── utils/
│       │   ├── app.ts
│       │   └── server.ts
│       ├── prisma/                         # Optional
│       ├── tests/
│       ├── package.json
│       ├── tsconfig.json
│       └── .env
│
├── packages/                              # Shared code (optional but recommended)
│   ├── types/                             # Shared TypeScript types
│   ├── utils/                             # Shared utilities
│   └── config/                            # Shared configs
│
├── package.json                           # Root package (workspaces)
├── turbo.json                             # If using Turborepo
├── .gitignore
└── README.md
```

*This monorepo keeps frontend and backend in one repository while allowing independent development and deployment. Every file already contains a single-line comment that explains its purpose so beginners can understand the project quickly.*

</details>

<br/>

## Getting Started

<details open>
<summary><b>1. Clone the repository</b></summary>

```bash
git clone https://github.com/willy7890/Zentrust-platform.git
cd Zentrust
```

</details>

<details>
<summary><b>2. Install dependencies</b></summary>

```bash
# From the root (recommended when using workspaces)
npm install
```

</details>

<details>
<summary><b>3. Environment variables</b></summary>

Copy the example environment files and fill in the required values:

```bash
cp apps/frontend/.env.local.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env
```

> ⚠️ **Never commit real secrets.** Keep `.env` and `.env.local` out of Git.

</details>

<details>
<summary><b>4. Run the applications</b></summary>

```bash
# Frontend
cd apps/frontend
npm run dev

# Backend (open another terminal)
cd apps/backend
npm run dev
```

</details>

<br/>

## Git Workflow (4 Collaborators)

We follow a simple and reliable branching model suitable for a small team.

### Main branches

| Branch | Purpose |
|---|---|
| `main` | Production-ready code only |
| `develop` | Integration branch for ongoing development |

### Feature / personal branches

Every team member works on their own feature branch. **Never commit directly to `main` or `develop`.**

```bash
# Make sure you are up to date first
git checkout develop
git pull origin develop

# Create and switch to your feature branch
git checkout -b feature/your-name-short-description
# Example: git checkout -b feature/john-consent-flow
```

**Recommended branch naming**

```
feature/<name>-<short-description>
bugfix/<name>-<short-description>
hotfix/<name>-<short-description>
```

### Daily workflow

```bash
# 1. Switch to your branch
git checkout feature/your-branch-name

# 2. Pull latest changes from develop (recommended way)
git pull origin develop

# 3. Make your changes, then stage and commit
git add .
git commit -m "feat: short clear description of the change"

# 4. Push your branch to the remote
git push origin feature/your-branch-name
```

> **Important:** Prefer `git pull origin develop` (or `main`) over `git pull -u origin main`.
> The `-u` flag is only needed once when you first set the upstream for a new branch.

### Open a Pull Request

1. Push your branch.
2. Open a Pull Request from your feature branch → `develop`.
3. Request review from at least one teammate.
4. After approval and successful checks, merge into `develop`.

### Keep your branch up to date

```bash
git checkout feature/your-branch-name
git pull origin develop
# Resolve any conflicts if they appear
git push origin feature/your-branch-name
```

<br/>

## Essential Git Commands

| Action | Command |
|---|---|
| Clone repository | `git clone <repo-url>` |
| Check current status | `git status` |
| Switch branch | `git checkout <branch-name>` |
| Create + switch branch | `git checkout -b <new-branch>` |
| Pull latest from remote | `git pull origin <branch>` |
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push branch | `git push origin <branch>` |
| List all branches | `git branch -a` |
| Delete local branch | `git branch -d <branch-name>` |
| Fetch remote updates | `git fetch origin` |
| View commit history | `git log --oneline` |

<br/>

## Team Collaboration Guidelines

- ✅ Always pull the latest `develop` before starting new work.
- ✅ Keep commits small and focused.
- ✅ Write clear commit messages (Conventional Commits style preferred).
- 🚫 Never force-push to `main` or `develop`.
- ✅ Resolve merge conflicts locally before opening a Pull Request.
- ✅ At least one code review is required before merging into `develop`.

<br/>

## License

**Proprietary** – All rights reserved.

<br/>

<div align="center">

*Prepared for collaborative development · Team size: 4 members*

<img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square" />

</div>
