"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../lib/auth-context";

function SignIn() {
  const { user, signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // React Router passed the previous page in location.state; in Next.js it
  // travels as ?from=/path. Only same-site paths are accepted.
  const requested = searchParams.get("from") || "";
  const from =
    requested.startsWith("/") && !requested.startsWith("//")
      ? requested
      : "/checkout";

  useEffect(() => {
    if (user) {
      router.replace(from);
    }
  }, [user, from, router]);

  if (user) {
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name to sign in.");
      return;
    }

    signIn(name);
    router.replace(from);
  }

  return (
    <div className="page form-card">
      <h2>Sign in</h2>
      <p className="lede">Sign in to continue to checkout.</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="signin-name">Name</label>
          <input
            id="signin-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "signin-error" : undefined}
          />
        </div>
        {error && (
          <p id="signin-error" className="error-text" role="alert">
            {error}
          </p>
        )}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
