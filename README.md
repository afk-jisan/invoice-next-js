# 📦 Invoice Dashboard

A full‑stack invoice management dashboard built with Next.js, Tailwind CSS, PostgreSQL. Track, view, edit and delete invoices seamlessly with authentication and real‑time previews.

---

## 🔎 What It Does

- Displays a list of invoices with details (amount, due date, status)  
- Supports creating, editing, and deleting invoices  
- Provides user authentication via NextAuth.js 
- Connects to a PostgreSQL database via Neon
- Auto‑deploys on Vercel 

---

## 🛠 Tech Stack

- **Next.js 13+** (App Router & Server Components)  
- **TypeScript**  
- **Tailwind CSS** for utility‑first styling  
- **NextAuth.js** for OAuth login
- **PostgreSQL** 
- **Vercel** for CI/CD and hosting

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/afk-jisan/invoice-next-js.git
   cd invoice-next-js
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env`  
   - Add your database URL and `AUTH_SECRET`

4. **Setup and seed the database**
   - **Create a Postgres database**  
     1. In the Vercel dashboard, click **Continue to Dashboard**, switch to the **Storage** tab, and select **Create Database**.  
     2. Pick your provider (Neon, Supabase, etc.) and click **Continue**.  
     3. Choose a region (e.g., iad1 – Washington D.C.) to minimize latency.  
     4. Once provisioned, open the **.env.local** tab, click **Show secret**, and copy the database URL snippet.  
     5. Rename `.env.example` to `.env` in your project root and paste in the copied variables.  
     6. Confirm `.env` is included in your `.gitignore` to keep secrets safe.
   - **Seed the database**  
     1. Start your local server:  
        ```bash
        pnpm dev
        ```  
     2. Navigate to `http://localhost:3000/seed` in your browser to run the seed script.  
     3. After seeing **Database seeded successfully**, you may remove the `/seed` route.
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

- **Server Components**: Efficient data fetching 
- **Next.js Routing**: App Router with file-based routing and nested layouts
- **Server Actions**: Simplified server-side data mutations and form handling
- **Streaming & Caching**: Enhanced performance with streaming UI and cache revalidation
- **Authentication**: Seamless GitHub OAuth integration via NextAuth.js

Challenges faced included configuring authentication and data mutation.

---




## 🌐 Live Demo

Experience the live application at: [https://invoice-next-js-eight.vercel.app/](https://invoice-next-js-eight.vercel.app/)

I will implement the registration a bit later. For now use the credentials below to log in and explore the dashboard and the rest of the functionalities: 

- **Email**: `user@nextmail.com`
- **Password**: `123456`

---





🎓 Credits
---
- This dashboard is based on the official Next.js App Router course. I have studied the Next.js documentation and implemented the example code to fit an invoice management use case. For more details, visit the Next.js website.
- Thoughtfully put together by [afk-jisan](https://github.com/afk-jisan).
