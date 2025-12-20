import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-saccs-light">
      <div className="text-center">
        <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-saccs-text mb-4">Pagina niet gevonden</h2>
        <p className="text-saccs-grey mb-8 max-w-md">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
