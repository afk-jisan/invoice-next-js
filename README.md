# 📦 Invoice Dashboard

A full‑stack invoice management dashboard built with Next.js, Tailwind CSS, PostgreSQL. Track, view, edit and delete invoices seamlessly with authentication and real‑time previews.

---

## 🔎 What It Does

- Displays a list of invoices with details (amount, due date, status)  
- Supports creating, editing, and deleting invoices  
- Provides user authentication via GitHub (NextAuth.js)  
- Connects to a PostgreSQL database via Neon
- Auto‑deploys on Vercel 

---

## 🛠 Tech Stack

- **Next.js 13+** (App Router & Server Components)  
- **React & TypeScript**  
- **Tailwind CSS** for utility‑first styling  
- **NextAuth.js** for OAuth login (GitHub)  
- **PostgreSQL** 
- **Vercel** for CI/CD and hosting

---

## 🚀 Getting Started



1. **Clone the repo**
   ```bash
   git clone https://github.com/afk-jisan/invoice-next-js.git
   cd invoice-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env`  
   - Add your database URL and `AUTH_SECRET`

4. **Seed the database**
   ```bash
   pnpm dev
   # Visit http://localhost:3000/seed to populate with sample data
   ```

5. **Run the app**
   ```bash
   pnpm dev
   # Open http://localhost:3000 in your browser
   ```

6. **Deploy to Vercel**
   1. **Create a Vercel account**: Go to https://vercel.com/signup, choose the free "Hobby" plan, and connect via GitHub.
   2. **Import your project**: In the Vercel dashboard, click **New Project**, select your GitHub repository, name your project, and click **Deploy**.
   3. **Configure Environment Variables**: Once deployed, navigate to the **Settings** → **Environment Variables** section and add the same variables from your local `.env` (e.g., `DATABASE_URL`, `NEXTAUTH_SECRET`).
   4. **Automatic Redeploys**: Every push to `main` triggers an automatic deployment. Pull requests generate instant Preview URLs for feedback and testing.
---

## ⭐ Key Features & Challenges

- **Server Components**: Efficient data fetching without client bundle overhead
- **Authentication**: Seamless GitHub OAuth integration via NextAuth.js
- **Database Seeding**: Custom `/seed` route for rapid prototyping
- **CI/CD Workflow**: Instant preview URLs for every pull request

Challenges faced included configuring authentication and securing environment variables in Vercel deployments.

---




## 🌐 Live Demo

Experience the live application at: [https://invoice-next-js-eight.vercel.app/](https://invoice-next-js-eight.vercel.app/)

Use the credentials below to log in and explore:

- **Email**: `user@nextmail.com`
- **Password**: `123456`

---




🎓 Credits

This dashboard is based on the official Next.js App Router course. I studied the Next.js documentation and tutorials, implementing and extending the example code to fit an invoice management use case. For full course details, see the Next.js Learn curriculum.
