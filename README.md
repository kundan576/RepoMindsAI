# RepoMindsAI

AI-powered GitHub Pull Request Review Platform that automatically analyzes code changes, understands repository context using vector search, and posts intelligent review comments directly on GitHub.

## Description

RepoMindsAI is a full-stack AI-powered SaaS application built with Next.js. It listens for GitHub Pull Request webhooks, retrieves changed files, finds relevant repository context using Pinecone vector search, and generates AI-powered code reviews using Groq's Llama 3.3 model through the Vercel AI SDK.

Every Pull Request review is automatically:

- Generated using AI
- Posted as a GitHub PR comment
- Stored in the database
- Displayed in the dashboard
- Sent as an email notification

Repositories can also be synchronized into Pinecone to provide repository-wide context, allowing the AI to understand code beyond the changed files.

The dashboard enables users to connect GitHub, browse repositories, monitor Pull Requests, view review history, manage subscriptions, and track AI usage.

---

# Features

- Automatic Pull Request Reviews
- AI-generated code reviews
- GitHub App integration
- GitHub OAuth authentication
- Semantic code search using Pinecone
- Repository synchronization
- Automatic GitHub PR comments
- Review history dashboard
- Email notifications
- Background processing with Inngest
- Free & Pro subscription plans
- Dark mode support
- Responsive dashboard

---

# Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React Framework |
| React 19 | UI Library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| TanStack Query | Data Fetching |
| Lucide React | Icons |
| Recharts | Charts |
| Streamdown | Markdown Rendering |
| next-themes | Dark Mode |

---

## Backend

| Technology | Purpose |
|------------|---------|
| PostgreSQL | Database |
| Prisma ORM | Database ORM |
| Better Auth | Authentication |
| Inngest | Background Jobs |

---

## AI & Search

| Technology | Purpose |
|------------|---------|
| Vercel AI SDK | AI Integration |
| Groq (Llama 3.3 70B Versatile) | AI Model |
| Pinecone | Vector Database |

---

## GitHub Integration

| Technology | Purpose |
|------------|---------|
| GitHub App | Repository Access |
| GitHub Webhooks | Pull Request Events |
| Octokit | GitHub API |

---

## Payments

| Technology | Purpose |
|------------|---------|
| Razorpay | Subscription Billing |

---

## Project Workflow

```text
GitHub Pull Request
        │
        ▼
GitHub Webhook
        │
        ▼
Inngest Background Function
        │
        ▼
Fetch Pull Request Files
        │
        ▼
Chunk Code
        │
        ▼
Pinecone Vector Search
        │
        ▼
Groq AI Review
        │
        ▼
Save Review
        │
        ▼
GitHub PR Comment
        │
        ▼
Dashboard + Email Notification
```

---

# Screenshots

## Landing Page

_Add Screenshot_

## Dashboard

_Add Screenshot_

## Repository List

_Add Screenshot_

## Pull Request Review

_Add Screenshot_

## GitHub Comment

_Add Screenshot_

## Email Notification

_Add Screenshot_

---

# Installation

Clone the repository

```bash
git clone https://github.com/kundan576/RepoMindsAI.git
```

Move into the project

```bash
cd RepoMindsAI
```

Install dependencies

```bash
npm install
```

Configure environment variables

```env
DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GITHUB_APP_ID=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=

PINECONE_API_KEY=
PINECONE_INDEX=

GROQ_API_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

Run database migrations

```bash
npx prisma migrate dev
```

Start the development server

```bash
npm run dev
```

Run Inngest

```bash
npx inngest-cli@latest dev
```

---

# Project Structure

```text
app/
│
├── (auth)
├── (protected)
├── api
│
components/
│
features/
├── billing
├── dashboard
├── github
├── overview
├── pull-requests
├── repo-sync
├── reviews
├── settings
│
lib/
│
prisma/
│
public/
```

---

# Upcoming Features

- Inline GitHub review comments
- AI-generated code fixes
- Multi-model AI support
- Review score
- Severity badges
- Repository analytics
- Team collaboration
- Organization support

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**Kundan Kumar**

GitHub: https://github.com/kundan576



---

# Support

If you found this project useful, please consider giving it a ⭐ on GitHub.


