export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} S.A.C.C.S. Built with Next.js & deployed on Vercel.</p>
      </div>
    </footer>
  );
}
