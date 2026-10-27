"use client";

import { AuthProvider } from "./AuthProvider";
import { CartProvider } from "./CartProvider";

// Context needs the browser, so both providers live in one Client Component
// that the (server) root layout wraps around the app.
export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
