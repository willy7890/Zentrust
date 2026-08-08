# Zentrust

**Global B2B Data Exchange Platform**

Zentrust securely connects businesses of all sizes with financial institutions (banks, credit unions, insurtechs) worldwide through a clean API. The platform enables controlled sharing of normalized financial data based on granular, user-managed consent.

---

## Project Overview

| Area               | Description                                              |
|--------------------|----------------------------------------------------------|
| **Frontend**       | Next.js 14 (App Router) – Business Portal + Institution Dashboard |
| **Backend**        | Node.js + Express                                        |
| **Database**       | PostgreSQL (Supabase)                                    |
| **Authentication** | Auth0                                                    |
| **Payments**       | Stripe                                                   |
| **Banking Data**   | Plaid + local Open Banking providers                     |
| **Accounting**     | QuickBooks API, Xero                                     |
| **KYC**            | Persona                                                  |
| **Hosting**        | Vercel (Frontend) + Railway (Backend)                    |

---

## Full Project Structure

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

This monorepo keeps frontend and backend in one repository while allowing independent development and deployment.

Every file already contains a single-line comment that explains its purpose so beginners can understand the project quickly.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/willy7890/Zentrust-platform.git
cd Zentrust
```

### 2. Install dependencies

```bash
# From the root (recommended when using workspaces)
npm install
```

### 3. Environment variables

Copy the example environment files and fill in the required values:

```bash
cp apps/frontend/.env.local apps/frontend/.env.local
cp apps/backend/.env apps/backend/.env
```

> Never commit real secrets. Keep `.env` and `.env.local` out of Git.

### 4. Run the applications

```bash
# Frontend
cd apps/frontend
npm run dev

# Backend (open another terminal)
cd apps/backend
npm run dev
```

---

## Git Workflow (4 Collaborators)

We follow a simple and reliable branching model suitable for a small team.

### Main branches

| Branch    | Purpose                                    |
|-----------|--------------------------------------------|
| `main`    | Production-ready code only                 |
| `develop` | Integration branch for ongoing development |

### Feature / personal branches

Every team member works on their own feature branch.  
**Never commit directly to `main` or `develop`.**

#### Create a new branch

```bash
# Make sure you are up to date first
git checkout develop
git pull origin develop

# Create and switch to your feature branch
git checkout -b feature/your-name-short-description
# Example: git checkout -b feature/john-consent-flow
```

#### Recommended branch naming

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

---

## Essential Git Commands

| Action                     | Command                                |
|----------------------------|----------------------------------------|
| Clone repository           | `git clone <repo-url>`                 |
| Check current status       | `git status`                           |
| Switch branch              | `git checkout <branch-name>`           |
| Create + switch branch     | `git checkout -b <new-branch>`         |
| Pull latest from remote    | `git pull origin <branch>`             |
| Stage all changes          | `git add .`                            |
| Commit changes             | `git commit -m "message"`              |
| Push branch                | `git push origin <branch>`             |
| List all branches          | `git branch -a`                        |
| Delete local branch        | `git branch -d <branch-name>`          |
| Fetch remote updates       | `git fetch origin`                     |
| View commit history        | `git log --oneline`                    |

---

## Team Collaboration Guidelines

- Always pull the latest `develop` before starting new work.
- Keep commits small and focused.
- Write clear commit messages (Conventional Commits style preferred).
- Never force-push to `main` or `develop`.
- Resolve merge conflicts locally before opening a Pull Request.
- At least one code review is required before merging into `develop`.

---

## License

Proprietary – All rights reserved.

---

**Prepared for collaborative development**  
Team size: 4 members
