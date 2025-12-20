export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About S.A.C.C.S</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modern Architecture</h2>
          <p className="text-gray-600 mb-4">
            This project is built with Next.js 14, leveraging the latest App Router for
            optimal performance and developer experience. It&apos;s optimized for serverless
            deployment on Vercel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Next.js 14</strong> - React framework with App Router</li>
            <li><strong>TypeScript</strong> - Type-safe development</li>
            <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
            <li><strong>pnpm</strong> - Fast and efficient package manager</li>
            <li><strong>Vercel</strong> - Serverless deployment platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Server-side rendering (SSR) and static site generation (SSG)</li>
            <li>API routes for serverless functions</li>
            <li>Automatic code splitting and optimization</li>
            <li>Image optimization with next/image</li>
            <li>TypeScript support out of the box</li>
            <li>Tailwind CSS for rapid UI development</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
