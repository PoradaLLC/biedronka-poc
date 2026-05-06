import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const P = {
  hero:         `${publicBasePath}/images/facebook-posts/deli-meat-and-cheese-platter.jpg`,
  meatPlatter:  `${publicBasePath}/images/facebook-posts/deli-meat-and-cheese-platter.jpg`,
  cheesePlatter:`${publicBasePath}/images/facebook-posts/cheese-platter-ring.jpg`,
  holiday:      `${publicBasePath}/images/facebook-posts/thanksgiving-roast-turkey.jpg`,
  kielbasa:     `${publicBasePath}/images/facebook-posts/smoked-sausage-assortment.jpg`,
  hams:         `${publicBasePath}/images/facebook-posts/smoked-hams.jpg`,
  golabki:      `${publicBasePath}/images/facebook-posts/golabki-stuffed-cabbage-trays.jpg`,
  casserole:    `${publicBasePath}/images/facebook-posts/baked-casserole-tray.jpg`,
  bacon:        `${publicBasePath}/images/facebook-posts/bacon-wrapped-chicken-rolls.jpg`,
  beet:         `${publicBasePath}/images/facebook-posts/beet-salad-containers.jpg`,
  potato:       `${publicBasePath}/images/facebook-posts/potato-pancakes.jpg`,
  paczki:       `${publicBasePath}/images/facebook-posts/paczki-donuts-glazed.jpg`,
};

const menuItems = [
  {
    num: "01",
    title: "Meat Platters",
    description:
      "Artfully arranged sliced ham, salami, and smoked meats — garnished with parsley and olives, ready to impress.",
    img: P.meatPlatter,
    alt: "Biedronka deli meat and cheese platter with garnish",
    meta: "Ham · Salami · Smoked Meats",
  },
  {
    num: "02",
    title: "Cheese Platters",
    description:
      "Imported European cheeses arranged with dried figs, raisins, and a striking rose centerpiece.",
    img: P.cheesePlatter,
    alt: "Elegant imported cheese platter with rose centerpiece",
    meta: "Imported · Aged · European",
  },
  {
    num: "03",
    title: "Holiday Entrées",
    description:
      "Whole roasted duck or turkey in a catering tray, finished with seasonal citrus and fresh kale — holiday centerpiece.",
    img: P.holiday,
    alt: "Roasted duck in catering tray with orange slices and kale",
    meta: "Duck · Turkey · Seasonal",
  },
  {
    num: "04",
    title: "Smoked Kielbasa & Hams",
    description:
      "Rings and links of house-smoked kielbasa alongside whole netted smoked hams — Polish tradition at its finest.",
    img: P.kielbasa,
    alt: "Assortment of smoked kielbasa sausage rings and links",
    meta: "Kielbasa · Whole Hams · Smoked",
  },
  {
    num: "05",
    title: "Gołąbki",
    description:
      "Traditional stuffed cabbage rolls filled with seasoned meat and rice, slow-simmered in rich tomato sauce.",
    img: P.golabki,
    alt: "Golabki stuffed cabbage rolls in tomato sauce",
    meta: "Stuffed Cabbage · Tomato Sauce",
  },
  {
    num: "06",
    title: "Baked Entrées",
    description:
      "Bacon-wrapped chicken rolls and layered meat casseroles — hearty, crowd-pleasing trays for any gathering.",
    img: P.bacon,
    alt: "Bacon-wrapped chicken rolls on a catering tray",
    meta: "Chicken · Casserole · Tray",
  },
  {
    num: "07",
    title: "Sides & Salads",
    description:
      "Vibrant beet salad, golden potato pancakes, and traditional Polish accompaniments packed by the container.",
    img: P.beet,
    alt: "Stacked containers of fresh beet salad",
    meta: "Beet Salad · Potato Pancakes",
  },
  {
    num: "08",
    title: "Polish Pastries",
    description:
      "Glazed pączki, layer cakes, and NYC bakery pastries — the perfect sweet finish for weddings and celebrations.",
    img: P.paczki,
    alt: "Glazed Polish paczki donuts arranged on a platter",
    meta: "Pączki · Cakes · Pastries",
  },
];

const galleryPhotos = [
  { src: P.holiday,  alt: "Roasted duck in holiday catering tray" },
  { src: P.bacon,    alt: "Bacon-wrapped chicken rolls" },
  { src: P.kielbasa, alt: "Smoked kielbasa sausage assortment" },
  { src: P.potato,   alt: "Golden potato pancakes" },
  { src: P.paczki,   alt: "Glazed Polish paczki donuts" },
];

const trustItems = [
  "Custom Platters",
  "Whole Entrées",
  "Holiday Specials",
  "Sides & Salads",
  "Polish Pastries",
  "Minimum Order Required",
];

const steps = [
  {
    n: "01",
    title: "Contact Us",
    body: "Call or fill out the form below with your event date, headcount, and any dish preferences.",
  },
  {
    n: "02",
    title: "We Customize",
    body: "We'll tailor the menu to your event size and tastes — from a single platter to a full spread.",
  },
  {
    n: "03",
    title: "Pick Up Ready",
    body: "Your order is freshly prepared and waiting for pickup. Everything arrives event-ready.",
  },
];

export const metadata = {
  title: "Catering | Biedronka Deli",
  description:
    "Authentic Polish catering from Biedronka Deli — platters, entrées, and pastries for weddings, holidays, and corporate events in the Poconos.",
};

export default function CateringPage() {
  return (
    <main>
      <CateringHero />
      <TrustBar />
      <WhyBiedronka />
      <CateringMenu />
      <SeasonalBanner />
      <GalleryStrip />
      <HowItWorks />
      <CateringContact />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function CateringHero() {
  return (
    <section className="grain relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${P.hero}')`,
          filter: "brightness(0.40) saturate(0.88)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,26,0.52) 0%, rgba(26,26,26,0.06) 38%, rgba(26,26,26,0.97) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "var(--red)" }} />

      <div className="wrap relative">
        <div className="eyebrow on-dark mb-5">Catering · Biedronka Deli · Stroudsburg, PA</div>
        <h1
          className="font-serif font-medium leading-[1.03] tracking-[-0.02em] text-white mb-6"
          style={{ fontSize: "clamp(46px, 6.8vw, 98px)", maxWidth: "17ch" }}
        >
          Polish Catering for{" "}
          <em style={{ color: "var(--red)", fontStyle: "italic" }}>Every Occasion.</em>
        </h1>
        <p
          className="text-[17px] leading-relaxed mb-9 max-w-[52ch]"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          Authentic Polish food made from scratch — platters, entrées, and desserts for weddings,
          holidays, corporate events, and family gatherings.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a href="#catering-contact" className="btn-red">
            Request a Quote →
          </a>
          <a href="#catering-menu" className="btn-outline">
            See the Menu
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust bar ─────────────────────────────────────────────────────────────── */
function TrustBar() {
  return (
    <div style={{ background: "var(--black)", borderBottom: "3px solid var(--red)" }}>
      <div className="wrap" style={{ padding: "0 36px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            padding: "22px 0",
          }}
        >
          {trustItems.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--red)",
                  flexShrink: 0,
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Why Biedronka ─────────────────────────────────────────────────────────── */
function WhyBiedronka() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="16" cy="16" r="15" stroke="var(--red)" strokeWidth="1.5" />
          <path d="M10 22 C10 16 14 10 16 10 C18 10 22 16 22 22" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="9" r="2" fill="var(--red)" />
        </svg>
      ),
      title: "Made from Scratch",
      body: "Every dish is prepared in-house daily using fresh ingredients. No shortcuts — just honest, handmade Polish food.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
          <rect x="1.75" y="1.75" width="28.5" height="28.5" rx="3" stroke="var(--red)" strokeWidth="1.5" />
          <path d="M8 16 L13 21 L24 11" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Authentic Polish Recipes",
      body: "Recipes passed down through generations — unchanged, uncompromised. The real flavors of Poland, right in the Poconos.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M4 8 H28 M4 16 H20 M4 24 H24" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Flexible Orders",
      body: "From a single platter to a full catering spread — we scale to your event size. Trays, platters, or complete menus.",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--gray)" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-end mb-16">
          <div>
            <div className="eyebrow mb-4">Why choose us</div>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.2vw, 58px)", color: "var(--black)" }}
            >
              Catering done{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>the Polish way.</em>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body)" }}>
            Biedronka Deli brings the warmth and authenticity of a family kitchen to your event table —
            with the scale and reliability you need to feed a crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#fff",
                border: "1.5px solid var(--gray-mid)",
                borderRadius: 8,
                padding: "40px 36px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ marginBottom: 24 }}>{f.icon}</div>
              <h3
                className="font-serif font-semibold mb-3"
                style={{ fontSize: "clamp(20px, 1.6vw, 24px)", color: "var(--black)", lineHeight: 1.15 }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--body)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Catering Menu ─────────────────────────────────────────────────────────── */
function CateringMenu() {
  return (
    <section id="catering-menu" className="section scroll-mt-20" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-end mb-16">
          <div>
            <div className="eyebrow mb-4">What we serve</div>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.2vw, 58px)", color: "var(--black)" }}
            >
              The full{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>catering menu.</em>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body)" }}>
            Every item is made fresh to order. Quantities and sizing are flexible — call us
            to discuss your event and we&apos;ll put together the right spread.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menuItems.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--gray-mid)",
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
            >
              <div className="relative w-full aspect-[4/3] shrink-0 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="font-mono text-[11px] font-bold tracking-[0.18em] mb-4"
                  style={{ color: "var(--red)" }}
                >
                  {item.num}
                </div>
                <h3
                  className="font-serif font-semibold leading-[1.15] mb-2"
                  style={{ fontSize: "clamp(17px, 1.4vw, 20px)", color: "var(--black)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.7] mb-5 flex-1" style={{ color: "var(--body)" }}>
                  {item.description}
                </p>
                <div
                  className="mt-auto pt-4 flex justify-between items-center text-[11px] font-bold tracking-[0.1em] uppercase"
                  style={{ borderTop: "1px solid var(--gray)", color: "var(--muted)" }}
                >
                  <span>{item.meta}</span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--red)", fontSize: "1rem" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#catering-contact" className="btn-red">
            Request a Custom Menu →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Seasonal banner ───────────────────────────────────────────────────────── */
function SeasonalBanner() {
  return (
    <div style={{ background: "var(--red)", borderTop: "3px solid var(--red-dark)", borderBottom: "3px solid var(--red-dark)" }}>
      <div className="wrap" style={{ padding: "64px 36px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Seasonal Specials
          </div>
          <h2
            className="font-serif font-medium tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3.8vw, 52px)", color: "#fff", lineHeight: 1.08 }}
          >
            Holiday Catering Available
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "54ch",
            }}
          >
            Christmas and Easter specials — including traditional Wigilia dishes, holiday platters,
            and festive pastries — are prepared seasonally and sell out fast.{" "}
            <strong style={{ color: "#fff" }}>Call ahead to reserve your order.</strong>
          </p>
          <a
            href="tel:+15707304464"
            className="btn-white"
            style={{ marginTop: 8 }}
          >
            Call (570) 730-4464 →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery strip ─────────────────────────────────────────────────────────── */
function GalleryStrip() {
  return (
    <div style={{ display: "flex", overflow: "hidden", borderTop: "4px solid var(--red)" }}>
      {galleryPhotos.map((photo) => (
        <div
          key={photo.src}
          style={{ position: "relative", flexShrink: 0, flex: 1, height: 300, minWidth: "60vw" }}
          className="md:min-w-0"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 60vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── How it works ──────────────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section className="section" style={{ background: "var(--black)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="eyebrow on-dark mb-4">Simple process</div>
          <h2
            className="font-serif font-medium tracking-[-0.02em]"
            style={{ fontSize: "clamp(34px, 4.2vw, 58px)", color: "#fff", lineHeight: 1.08 }}
          >
            How catering{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>works.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                padding: "48px 40px",
                borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none",
                position: "relative",
              }}
            >
              <div
                className="font-serif font-bold"
                style={{
                  fontSize: 72,
                  lineHeight: 1,
                  color: "var(--red)",
                  opacity: 0.25,
                  marginBottom: 24,
                  letterSpacing: "-0.04em",
                }}
              >
                {step.n}
              </div>
              <h3
                className="font-serif font-semibold mb-4"
                style={{ fontSize: "clamp(20px, 1.8vw, 26px)", color: "#fff", lineHeight: 1.15 }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.62)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 56,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="#catering-contact" className="btn-red">
            Start Your Order →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .how-step { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.10); }
        }
      `}</style>
    </section>
  );
}

/* ─── Catering contact ──────────────────────────────────────────────────────── */
function CateringContact() {
  return (
    <section id="catering-contact" className="section scroll-mt-20" style={{ background: "var(--white)", borderTop: "1px solid var(--gray)" }}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow mb-5">Get in touch</div>
          <h2
            className="font-serif font-medium tracking-[-0.02em] leading-[1.05] mb-7"
            style={{ fontSize: "clamp(34px, 4.2vw, 58px)", color: "var(--black)" }}
          >
            Request a{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>catering quote.</em>
          </h2>
          <p style={{ color: "var(--body)", maxWidth: "46ch", marginBottom: 32, lineHeight: 1.75 }}>
            Tell us about your event — the date, headcount, and any dishes you have in mind.
            We&apos;ll follow up quickly to put together the right menu for you.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
            {[
              "Include your event date and approximate guest count",
              "Mention any specific dishes or dietary needs",
              "Allow 48–72 hours for catering inquiries",
              "Minimum order required — ask for details",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--gray)",
                  fontSize: 15,
                  color: "var(--charcoal)",
                }}
              >
                <span style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }}>●</span>
                {item}
              </li>
            ))}
          </ul>

          <div
            style={{
              padding: "24px 28px",
              background: "var(--gray)",
              borderRadius: 8,
              borderLeft: "4px solid var(--red)",
            }}
          >
            <div className="eyebrow mb-3">Call us directly</div>
            <a
              href="tel:+15707304464"
              className="font-serif font-bold"
              style={{ fontSize: 30, color: "var(--black)", display: "block", lineHeight: 1 }}
            >
              (570) 730-4464
            </a>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>
              354 N 9th St, Stroudsburg, PA 18360
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 3 }}>
              Mon–Sat 9 AM–6 PM · Sun 10 AM–4 PM
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
