import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Biedronka Deli",
  description: "Demo blog posts from Biedronka Deli in Stroudsburg, PA.",
};

const posts = [
  {
    title: "What to Pick Up for a Polish Weekend Dinner",
    date: "April 18, 2026",
    category: "Shopping Guide",
    excerpt:
      "A simple spread of kielbasa, pierogi, beet salad, rye bread, and a few pantry staples can turn a quiet weekend meal into something generous and memorable.",
    image: "https://cdn4.localdatacdn.com/pa/stroudsburg/6383899/original/2cO97a0ihm.jpg",
    alt: "Prepared Polish foods at Biedronka Deli",
  },
  {
    title: "Fresh Bakery Days at the Deli",
    date: "April 11, 2026",
    category: "Fresh Arrivals",
    excerpt:
      "Bread, paczki, rolls, and pastries arrive through the week from New York City bakeries. Here is when to stop by for the best selection.",
    image: "https://cdn4.localdatacdn.com/pa/stroudsburg/6383899/original/GdT9MJrigT.jpg",
    alt: "Fresh baked goods at Biedronka Deli",
  },
  {
    title: "A Quick Guide to the Deli Counter",
    date: "April 4, 2026",
    category: "Deli Counter",
    excerpt:
      "From smoked meats to Ukrainian ham and made-to-order sandwiches, the counter is the best place to ask questions and try something new.",
    image: "https://cdn6.localdatacdn.com/pa/stroudsburg/6383899/original/UYK1oMtgXO.jpg",
    alt: "Biedronka Deli counter and grocery selection",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section
        style={{
          background: "var(--black)",
          color: "#fff",
          padding: "92px 0 76px",
          borderBottom: "4px solid var(--red)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow on-dark" style={{ marginBottom: 18 }}>
            Biedronka Journal
          </div>
          <h1
            className="font-serif font-medium"
            style={{
              fontSize: "clamp(46px, 6vw, 86px)",
              lineHeight: 1.02,
              maxWidth: "11ch",
              marginBottom: 24,
            }}
          >
            Notes from the deli.
          </h1>
          <p style={{ maxWidth: "56ch", color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.75 }}>
            Demo updates, shopping guides, and fresh arrival notes for Biedronka Deli customers in the Poconos.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
                <div className="blog-card-image">
                  <Image src={post.image} alt={post.alt} fill className="object-cover" sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-serif">{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <a href="/#contact" className="blog-card-link">
                    Ask about this -&gt;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--red-pale)", borderTop: "1px solid var(--border-red)", padding: "64px 0" }}>
        <div className="wrap blog-cta">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Visit the store
            </div>
            <h2 className="font-serif">Looking for something specific?</h2>
          </div>
          <div>
            <p>
              Call ahead or stop in to ask what is fresh this week. Demo posts can later become real updates,
              recipes, event notes, or product spotlights.
            </p>
            <a href="tel:+15707304464" className="btn-red">
              Call (570) 730-4464
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1.5px solid var(--gray-mid);
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
        }
        .blog-card-image {
          position: relative;
          aspect-ratio: 16 / 10;
          background: var(--gray);
        }
        .blog-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 28px;
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }
        .blog-card h2 {
          margin: 0 0 14px;
          color: var(--black);
          font-size: clamp(24px, 2.5vw, 32px);
          line-height: 1.1;
          font-weight: 700;
        }
        .blog-card p {
          margin: 0 0 24px;
          color: var(--body);
          font-size: 14.5px;
          line-height: 1.75;
        }
        .blog-card-link {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--gray);
          color: var(--red);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .blog-cta {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: center;
        }
        .blog-cta h2 {
          margin: 0;
          color: var(--black);
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          font-weight: 600;
        }
        .blog-cta p {
          margin: 0 0 22px;
          color: var(--body);
          font-size: 16px;
          line-height: 1.75;
        }
        @media (max-width: 900px) {
          .blog-grid,
          .blog-cta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
