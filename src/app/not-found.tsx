import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>Pagina niet gevonden</h2>
        <p>De pagina die u zoekt bestaat niet of is verplaatst.</p>
        <Link href="/" className="button button-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
