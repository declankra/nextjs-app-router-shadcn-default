# DKBuilds Next.js Starter Kit

A simple Next.js starter template with some basic integrations. This project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Use it to launch your next web application, fast.

## Features

- **Next.js 14.2.14** with App Router, Typescript, and Tailwind CSS
- **Shadcn/ui** for pre-configured components
- **Framer Motion** for smooth animations
- **Analytics**: OpenPanel
- **Supabase** for backend services
  - Authentication
  - Database
  - Real-time subscriptions
- **Deployment**: Vercel

## Getting Started

### Initial Setup

1. **Clone the Repository**
   ```bash
   # Navigate to your desired folder
   cd ~/Documents/Projects
   
   # Clone the repository
   git clone https://github.com/declankra/nextjs-app-router-shadcn-default.git
   
   # Enter the repository folder
   cd nextjs-app-router-shadcn-default
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Create a `.env.local` file using the `.env.example` file as a reference.

```env
# Set up environment variables
cp .env.example .env.local

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# OpenPanel Configuration
NEXT_PUBLIC_OPENPANEL_PROD_CLIENT_ID=your-openpanel-client-id
NEXT_PUBLIC_OPENPANEL_DEV_CLIENT_ID=your-openpanel-dev-client-id

```

## Project Structure

```
├── app/                # App router 
│   ├── layout       # Reusable layout
│   └── page         # Main page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── sections/      # Reusable sections
│   └── layout/        # Layout components
├── lib/               # Utility functions
│   ├── supabase/      # Supabase client 
│   ├── analytics/     # Analytics
├── types/             # TypeScript type definitions
```

## Learn More

To learn more about the technologies used in this starter:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
