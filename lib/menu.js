// Menu data lives in /public/menu.json and is fetched in the browser,
// exactly like the original React app.
export async function getMenu(signal) {
  const res = await fetch("/menu.json", { signal });
  if (!res.ok) throw new Error(`Menu request failed (${res.status})`);
  return res.json();
}
