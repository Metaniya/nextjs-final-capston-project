"use client";

// Replaces the old ErrorBoundary class component: Next.js wraps each route
// segment in an error boundary automatically when this file exists.
export default function Error() {
  return (
    <div className="page status status--error" role="alert">
      <h2>Something went wrong</h2>
      <p>Please refresh the page and try again.</p>
    </div>
  );
}
