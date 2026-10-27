"use client";

import NavLink from "./NavLink";
import { useAuth } from "../lib/auth-context";
import { useCart } from "../lib/cart-context";

function Header() {
  const { user, signOut } = useAuth();
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink href="/" className="logo" end>
          <img className="logo-img" src="/assets/icon.png" alt="" />
          <span>
            <span className="logo-text">Addis Eats</span>
            <span className="logo-tag">Ethiopian food delivery</span>
          </span>
        </NavLink>
        <nav className="nav" aria-label="Main">
          <NavLink href="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink href="/menu" className="nav-link">
            Menu
          </NavLink>
          <NavLink href="/cart" className="nav-link nav-cart">
            Cart
            <span className="cart-count">{count}</span>
          </NavLink>
          <NavLink href="/checkout" className="nav-link">
            Checkout
          </NavLink>
          {user ? (
            <span className="nav-user">
              Signed in as {user.name}
              <button type="button" onClick={signOut}>
                Sign out
              </button>
            </span>
          ) : (
            <NavLink href="/signin" className="nav-link">
              Sign in
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
