# S.A.C.C.S

A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for serverless deployment on Vercel.

## Features

- ⚡ **Next.js 14** - Latest App Router with Server Components
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- 📦 **pnpm** - Fast and efficient package manager
- ☁️ **Serverless Ready** - Optimized for Vercel deployment
- 🚀 **Performance Optimized** - Automatic code splitting and optimization

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript compiler check

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── api/            # API routes (serverless functions)
│   ├── about/          # About page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── error.tsx       # Error boundary
│   ├── loading.tsx     # Loading UI
│   ├── not-found.tsx   # 404 page
│   └── globals.css     # Global styles
└── components/         # Reusable React components
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Environment Variables

Create a `.env.local` file in the root directory for local environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

MIT
