import Image from "next/image";
import Link from "next/link";

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.png`;

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "rgba(255,255,255,0.7)",
        padding: "80px 0 36px",
        borderTop: "4px solid var(--red)",
      }}
    >
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ maxWidth: 320 }}>
            <Link href="/" className="footer-brand" aria-label="Biedronka Deli home">
              <Image
                src={logoSrc}
                alt="Biedronka Deli"
                width={180}
                height={52}
                style={{ objectFit: "contain", height: 44, width: "auto" }}
              />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
              Authentic Polish deli and grocery serving the Pocono Mountains
              from Stroudsburg, PA. Fresh kielbasa, pierogi, NYC bakery
              pastries, and imported Polish products.
            </p>
            <a
              href="https://www.facebook.com/BiedronkaPoconos/"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-social"
              style={{ display: "inline-block", marginTop: 18, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              Facebook -&gt;
            </a>
          </div>

          <FooterCol title="What We Carry">
            <Link href="/#menu">Smoked Meats &amp; Kielbasa</Link>
            <Link href="/#menu">Polish Pastries &amp; Bread</Link>
            <Link href="/#menu">Pierogis &amp; Prepared Foods</Link>
            <Link href="/#menu">Hot Food Bar</Link>
            <Link href="/#menu">Imported Groceries</Link>
            <Link href="/#menu">Made-to-Order Deli</Link>
          </FooterCol>

          <FooterCol title="Visit">
            <Link href="/#about">Our Story</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#testimonials">Reviews</Link>
            <Link href="/#contact">Contact</Link>
            <a href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A" target="_blank" rel="noopener noreferrer">
              Get Directions -&gt;
            </a>
          </FooterCol>

          <FooterCol title="Hours &amp; Contact">
            <span>Mon - Sat / 9 AM - 6 PM</span>
            <span>Sunday / 10 AM - 4 PM</span>
            <a href="tel:+15707304464" style={{ color: "var(--red)", marginTop: 8, fontWeight: 700 }}>
              (570) 730-4464
            </a>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 4 }}>
              354 N 9th St, Stroudsburg PA 18360
            </span>
          </FooterCol>
        </div>

        <div
          className="foot-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          <span>Copyright {new Date().getFullYear()} Biedronka Deli / Stroudsburg, PA</span>
          <span style={{ color: "var(--red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Polish Deli
          </span>
        </div>
      </div>

      <style>{`
        .footer-brand {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: #fff;
          border-radius: 4px;
          padding: 8px 10px;
        }
        .foot-grid {
          display: grid;
          grid-template-columns: 1.3fr 1.1fr 0.9fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        @media (max-width: 900px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
          .foot-bottom { flex-direction: column; gap: 12px; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .foot-grid { grid-template-columns: 1fr; }
        }
        .foot-social { color: rgba(255,255,255,0.45); transition: color 0.2s; }
        .foot-social:hover { color: var(--red); }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5
        style={{
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--red)",
          fontWeight: 700,
          margin: "0 0 18px",
        }}
      >
        {title}
      </h5>
      <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14 }}>
        {children}
      </div>
      <style>{`
        a { color: rgba(255,255,255,0.62); transition: color 0.2s; }
        a:hover { color: #fff; }
        span { color: rgba(255,255,255,0.55); }
      `}</style>
    </div>
  );
}
