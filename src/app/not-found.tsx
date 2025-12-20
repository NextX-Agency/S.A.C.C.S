export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-4">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">
        Return Home
      </a>
    </div>
  );
}
