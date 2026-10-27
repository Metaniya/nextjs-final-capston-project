import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page status">
      <h2>Page not found</h2>
      <p>Sorry, we could not find that page.</p>
      <p className="page-links">
        <Link className="btn" href="/">
          Go home
        </Link>
      </p>
    </div>
  );
}
