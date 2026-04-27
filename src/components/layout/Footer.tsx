export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(243,236,223,0.7)",
        padding: "80px 0 36px",
        borderTop: "1px solid var(--line-on-dark)",
      }}
    >
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ maxWidth: 340 }}>
            <div className="brand" style={{ color: "var(--cream)", marginBottom: 20 }}>
              <span
                className="brand-mark"
                aria-hidden
                style={{ fontSize: 18, fontStyle: "italic" }}
              >
                B
              </span>
              <span>
                <b>Biedronka</b> Deli
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(243,236,223,0.6)" }}>
              Authentic Polish deli and grocery serving the Pocono Mountains community from
              Stroudsburg, PA. Fresh kielbasa, pierogi, baked goods from NYC bakeries, and
              imported Polish products.
            </p>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <a
                href="https://www.facebook.com/BiedronkaPoconos/"
                target="_blank"
                rel="noopener noreferrer"
                className="foot-social"
              >
                Facebook
              </a>
            </div>
          </div>

          <FooterCol title="What We Carry">
            <a href="#menu">Smoked Meats & Kielbasa</a>
            <a href="#menu">Polish Pastries & Bread</a>
            <a href="#menu">Pierogis & Prepared Foods</a>
            <a href="#menu">Hot Food Bar</a>
            <a href="#menu">Imported Groceries</a>
            <a href="#menu">Made-to-Order Deli</a>
          </FooterCol>

          <FooterCol title="Visit">
            <a href="#about">Our Story</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
            <a
              href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>
          </FooterCol>

          <FooterCol title="Hours">
            <span>Mon – Sat · 9 AM – 6 PM</span>
            <span>Sunday · 10 AM – 4 PM</span>
            <a href="tel:+15707304464" style={{ color: "var(--red-soft)", marginTop: 12 }}>
              (570) 730-4464
            </a>
            <span style={{ fontSize: 12, color: "rgba(243,236,223,0.4)", marginTop: 4 }}>
              354 N 9th St, Stroudsburg PA
            </span>
          </FooterCol>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            fontSize: 12,
            color: "rgba(243,236,223,0.45)",
            letterSpacing: "0.02em",
          }}
          className="foot-bottom"
        >
          <div>© {new Date().getFullYear()} Biedronka Deli · Stroudsburg, PA</div>
        </div>
      </div>

      <style>{`
        .foot-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--line-on-dark);
        }
        @media (max-width: 860px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
          .foot-bottom { flex-direction: column; gap: 16px; }
        }
        .foot-social { color: rgba(243,236,223,0.45); transition: color 0.2s; }
        .foot-social:hover { color: var(--red-soft); }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--red-soft)",
          fontWeight: 500,
          margin: "0 0 20px",
        }}
      >
        {title}
      </h5>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
        {children}
      </div>
      <style>{`
        a { color: rgba(243,236,223,0.68); transition: color 0.2s; }
        a:hover { color: var(--red-soft); }
      `}</style>
    </div>
  );
}
