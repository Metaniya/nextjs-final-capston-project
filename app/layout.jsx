import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Addis Eats",
  description: "Food delivery across Addis Ababa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>
            <div className="app">
              <Header />
              <main className="site-main">{children}</main>
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
