export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to S.A.C.C.S
        </h1>
        <p className="text-center text-lg mb-8">
          Modern Next.js application with serverless architecture
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">⚡ Fast & Efficient</h2>
            <p className="text-gray-600">
              Built with Next.js 14 and optimized for Vercel deployment
            </p>
          </div>
          
          <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">🔧 Modern Stack</h2>
            <p className="text-gray-600">
              TypeScript, Tailwind CSS, and App Router for best practices
            </p>
          </div>
          
          <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">☁️ Serverless</h2>
            <p className="text-gray-600">
              Serverless architecture ready for scalable deployments
            </p>
          </div>
          
          <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">📦 pnpm</h2>
            <p className="text-gray-600">
              Fast and efficient package management with pnpm
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
