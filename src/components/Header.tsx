import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          S.A.C.C.S
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="/api/hello" className="hover:text-blue-500 transition-colors">
            API
          </Link>
        </div>
      </nav>
    </header>
  );
}
