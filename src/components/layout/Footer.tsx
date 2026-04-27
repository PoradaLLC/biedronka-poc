import Image from "next/image";

export function Footer() {
  return (
    <footer style={{
      background: "var(--black)",
      color: "rgba(255,255,255,0.7)",
      padding: "80px 0 36px",
      borderTop: "4px solid var(--red)",
    }}>
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand col */}
          <div style={{ maxWidth: 320 }}>
            <a href="#" style={{ display: "inline-block", marginBottom: 20 }}>
              <Image
                src="/images/logo.png"
                alt="Biedronka Deli"
                width={160}
                height={46}
                style={{ objectFit: "contain", height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </a>
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
              Facebook →
            </a>
          </div>

          <FooterCol title="What We Carry">
            <a href="#menu">Smoked Meats &amp; Kielbasa</a>
            <a href="#menu">Polish Pastries &amp; Bread</a>
            <a href="#menu">Pierogis &amp; Prepared Foods</a>
            <a href="#menu">Hot Food Bar</a>
            <a href="#menu">Imported Groceries</a>
            <a href="#menu">Made-to-Order Deli</a>
          </FooterCol>

          <FooterCol title="Visit">
            <a href="#about">Our Story</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
            <a href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A" target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </FooterCol>

          <FooterCol title="Hours &amp; Contact">
            <span>Mon – Sat · 9 AM – 6 PM</span>
            <span>Sunday · 10 AM – 4 PM</span>
            <a href="tel:+15707304464" style={{ color: "var(--red)", marginTop: 8, fontWeight: 700 }}>
              (570) 730-4464
            </a>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 4 }}>
              354 N 9th St, Stroudsburg PA 18360
            </span>
          </FooterCol>
        </div>

        <div className="foot-bottom" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 28,
          fontSize: 12,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.02em",
        }}>
          <span>© {new Date().getFullYear()} Biedronka Deli · Stroudsburg, PA</span>
          <span style={{ color: "var(--red)", fontSize: 18 }}>🐞</span>
        </div>
      </div>

      <style>{`
        .foot-grid {
          display: grid;
          grid-template-columns: 1.3fr 1.1fr 0.9fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        @media (max-width: 900px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
          .foot-bottom { flex-direction: column; gap: 12px; }
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
      <h5 style={{
        fontSize: 10,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--red)",
        fontWeight: 700,
        margin: "0 0 18px",
      }}>
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
