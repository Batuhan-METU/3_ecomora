import "./globals.css";
import "./fanta.css";

import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Ecomora",
  description: "A super cool store for programmers and productivity fiends!!",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link id="header-content-link" href={"/"}>
                  <h1>Ecomora</h1>
                </Link>

                <h5 className="mid-text">- Shopping Feels Good -</h5>
                <Cart />
              </div>
            </header>

            <main>{children}</main>
            <div className="hr" />
            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peak at new additions to store, special offers,
                  and so much more!
                </h5>
                <EmailInput />
              </div>

              <div className="link-container">
                <div>
                  <h3>Batuhan B</h3>
                  <p>My Personal Web Site! 👇</p>
                  <Link
                    className="links"
                    target="_blank"
                    href="https://batuhanbasoda.netlify.app"
                  >
                    To visit my portfolio =&gt;{" "}
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link className="links" href={"/"}>
                    Home
                  </Link>
                  <Link className="links" href={"/cart"}>
                    Cart
                  </Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link className="links" href={"/contact"}>
                    Contact
                  </Link>
                  <Link className="links" href={"/faq"}>
                    Frequently Asked Questions
                  </Link>
                </div>
              </div>

              <div className="socials">
                <p>
                  ©{" "}
                  <a className="links-k" href="https://" target="_blank">
                    Batuhan B
                  </a>{" "}
                  2025
                  <br />
                  Built with NextJS &{" "}
                  <a
                    className="links-k"
                    href="https://www.fantacss.smoljames.com"
                    target="_blank"
                  >
                    FantaCSS
                  </a>{" "}
                  & Stripe 🔥
                </p>
                <div className="social-links">
                  <Link
                    href={"https://github.com/Batuhan-METU"}
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/batuhan-ba%C5%9Foda-b78799377/"
                    }
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
