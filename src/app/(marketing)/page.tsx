import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

// Real Biedronka Deli photos sourced from Google Maps listing
const BIEDRONKA_PHOTOS = {
  p1: "https://cdn6.localdatacdn.com/pa/stroudsburg/6383899/original/3FYacwytH1.jpg",
  p2: "https://cdn6.localdatacdn.com/pa/stroudsburg/6383899/original/UYK1oMtgXO.jpg",
  p3: "https://cdn4.localdatacdn.com/pa/stroudsburg/6383899/original/GdT9MJrigT.jpg",
  p4: "https://cdn4.localdatacdn.com/pa/stroudsburg/6383899/original/j80aHGQkux.jpg",
  p5: "https://cdn4.localdatacdn.com/pa/stroudsburg/6383899/original/2cO97a0ihm.jpg",
};

const CATEGORY_PHOTOS = {
  kielbasa: "https://commons.wikimedia.org/wiki/Special:FilePath/Kielbasas.jpg?width=1200",
  pastries: "https://commons.wikimedia.org/wiki/Special:FilePath/Doughnuts_and_p%C4%85czki_in_Poland.jpg?width=1200",
  pierogi: "https://commons.wikimedia.org/wiki/Special:FilePath/Pierogi_in_a_Polish_shop.jpg?width=1200",
  hotFood: "https://commons.wikimedia.org/wiki/Special:FilePath/Food_of_Poland_-_%C5%BCurek_soup_served_in_bread.jpg?width=1200",
};

const categories = [
  {
    num: "01",
    label: "Signature",
    title: "Smoked Meats & Kielbasa",
    body: "Authentic Polish sausages and smoked meats — the heart of the deli. Ukrainian ham and Grandma's ham are customer favorites. Fresh inventory arrives Thursday and Friday.",
    meta: "Kielbasa · Smoked · Cured",
    featured: true,
    img: CATEGORY_PHOTOS.kielbasa,
    imgAlt: "Assorted Polish kielbasa and smoked sausage",
  },
  {
    num: "02",
    label: "",
    title: "Polish Pastries & Bread",
    body: "Pączki, donuts, cakes, rolls, and bread sourced fresh from three New York City bakeries. Delivered Monday, Wednesday, and Thursday through Saturday.",
    meta: "Pączki · Donuts · Fresh Bread",
    featured: false,
    img: CATEGORY_PHOTOS.pastries,
    imgAlt: "Polish paczki and doughnuts in a bakery case",
  },
  {
    num: "03",
    label: "",
    title: "Pierogis & Prepared Foods",
    body: "Traditional pierogis, golumpki, beet salad, herring, and a rotating selection of authentic Polish prepared foods — ready to take home.",
    meta: "Pierogis · Golumpki · Polish",
    featured: false,
    img: CATEGORY_PHOTOS.pierogi,
    imgAlt: "Pierogi for sale in a Polish deli case",
  },
  {
    num: "04",
    label: "",
    title: "Hot Food Bar",
    body: "Our new hot food bar — including the magical pickle soup — offers warm, freshly prepared dishes ready to go. Hearty, authentic, and worth the drive.",
    meta: "Hot · Fresh · Daily",
    featured: false,
    img: CATEGORY_PHOTOS.hotFood,
    imgAlt: "Polish zurek soup served hot in bread",
  },
  {
    num: "05",
    label: "",
    title: "Imported Groceries",
    body: "Imported Polish snacks, Kinder eggs, sauerkraut, jarred pickles, condiments, and pantry staples straight from Europe — the Poconos' best selection.",
    meta: "Imported · Pantry · European",
    featured: false,
    img: BIEDRONKA_PHOTOS.p2,
    imgAlt: "Biedronka imported Polish groceries",
  },
  {
    num: "06",
    label: "",
    title: "Made-to-Order Deli",
    body: "Step up to the 35-foot meat counter for a custom sandwich or salad. Our knowledgeable staff will guide you through every cut and cured option.",
    meta: "Sandwiches · Salads · Custom",
    featured: false,
    img: BIEDRONKA_PHOTOS.p3,
    imgAlt: "Biedronka made-to-order deli counter",
  },
];

const stats = [
  { n: "4.5", em: "★", l: "Google Rating" },
  { n: "77",  em: "+", l: "Customer Reviews" },
  { n: "3",   em: "",  l: "NYC Bakeries" },
  { n: "35",  em: "ft",l: "Meat Counter" },
];

const testimonials = [
  {
    quote: "Absolutely LOVE this place! The owner Klaudia is such a wonderful person and her staff. So many different delicious items to choose from. They were so very helpful. So clean, organized, and professional. This will be my family's go to Polish Deli!",
    who: "Henry Brendon Kotowski",
    role: "Local Guide",
    initials: "HK",
  },
  {
    quote: "Amazing selection of fresh deli food, hot prepared food, and pantry items. The store is incredibly clean, everyone is friendly, and the prices are great. The pickle soup is magical!",
    who: "Sarah Bauch",
    role: "Local Guide · 51 reviews",
    initials: "SB",
  },
  {
    quote: "Best polish store in all of Pennsylvania, worth the drive regardless of where you live. Owners go above and beyond — they treat their customers like family. 10/10.",
    who: "Maciej Nicpon",
    role: "Google Review",
    initials: "MN",
  },
  {
    quote: "Great Polish deli that hits the spot for smoked meats and other goodies! The new building is much more spacious, and it is great to see a local business thriving.",
    who: "Laurent Bourg",
    role: "Local Guide · 46 reviews",
    initials: "LB",
  },
  {
    quote: "My wife, being Polish, insists on going here every time we go to the Poconos! Their selection of deli meats is incredible. We especially love the Ukrainian ham and Grandma's ham.",
    who: "Stephen Ranker",
    role: "Local Guide · 88 reviews",
    initials: "SR",
  },
  {
    quote: "My Polish husband is so happy. What a selection at this store! Friendly employees. They seriously have anything your Polish culinary dreams could want. Better than Biedronka in Poland!",
    who: "Tatiana Johnson",
    role: "Local Guide · 28 reviews",
    initials: "TJ",
  },
  {
    quote: "Just purchased the smoked salmon and it was one of the best I've had on the east coast. Melts in your mouth. All the meats, cheese, bakery goods at the counter are fresh.",
    who: "Joey Joey",
    role: "Local Guide · 147 reviews",
    initials: "JJ",
  },
  {
    quote: "I had a very positive experience shopping at Biedronka. This is truly one of the best places in the area for authentic Polish products and flavors from home.",
    who: "Kasia B",
    role: "Local Guide · 110 reviews",
    initials: "KB",
  },
  {
    quote: "2025: best selection of Polish food in the area now! They moved to the new building and the selection of foods and drinks is excellent.",
    who: "Peter Vernacchia",
    role: "Local Guide · 342 reviews",
    initials: "PV",
  },
  {
    quote: "First time going and I found it to be amazing! I strongly recommend the Ukraine ham, Swiss cheese, golumpki, rye bread, beet salad, and the herring. All incredible!",
    who: "Priscilla Maciejeski",
    role: "Google Review",
    initials: "PM",
  },
  {
    quote: "Lovely people, delicious, authentic foods. Best wishes for their expansion.",
    who: "Marcia Fenlon",
    role: "Local Guide · 96 reviews",
    initials: "MF",
  },
  {
    quote: "New store, right next to old one. Large selection. They now have a hot bar of food. Food is tasty. Worth the drive.",
    who: "JNP 123",
    role: "Local Guide · 85 reviews",
    initials: "JN",
  },
];

const marqueeItems = [
  "Kielbasa",
  "Pączki",
  "Fresh Daily",
  "Smoked Salmon",
  "Pierogis",
  "NYC Bakeries",
  "Ukrainian Ham",
  "Hot Food Bar",
  "Imported Goods",
  "Made to Order",
  "Pickle Soup",
  "Stroudsburg PA",
];

const stripImages = [
  { src: BIEDRONKA_PHOTOS.p1, alt: "Biedronka Deli — store view" },
  { src: BIEDRONKA_PHOTOS.p2, alt: "Biedronka Deli — product selection" },
  { src: BIEDRONKA_PHOTOS.p3, alt: "Biedronka Deli — deli counter" },
  { src: BIEDRONKA_PHOTOS.p4, alt: "Biedronka Deli — baked goods" },
  { src: BIEDRONKA_PHOTOS.p5, alt: "Biedronka Deli — prepared foods" },
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Badges />
      <Menu />
      <Marquee />
      <About />
      <Hours />
      <Testimonials />
      <PhotoStrip />
      <Contact />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="grain relative min-h-[90vh] flex items-end pb-20 overflow-hidden">
      {/* Photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BIEDRONKA_PHOTOS.p1}')`, filter: "brightness(0.45) saturate(0.9)" }}
      />
      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.1) 35%, rgba(26,26,26,0.96) 100%)",
        }}
      />
      {/* Red top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "var(--red)" }} />

      <div className="wrap relative">
        <div className="eyebrow on-dark mb-5">Authentic Polish Deli · Stroudsburg, PA</div>
        <h1
          className="font-serif font-medium leading-[1.03] tracking-[-0.02em] text-white mb-6"
          style={{ fontSize: "clamp(52px, 7.5vw, 108px)", maxWidth: "14ch" }}
        >
          Polish flavors,
          <br />
          <em className="not-italic" style={{ color: "var(--red)", fontStyle: "italic" }}>right here</em>{" "}
          in the Poconos.
        </h1>
        <p className="text-[17px] leading-relaxed mb-9 max-w-[50ch]" style={{ color: "rgba(255,255,255,0.82)" }}>
          Fresh kielbasa, pierogi, smoked meats, pączki from NYC bakeries, and imported
          Polish groceries — all in one spot in Stroudsburg.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a href="tel:+15707304464" className="btn-red">
            Call (570) 730-4464 →
          </a>
          <a href="#menu" className="btn-outline">
            See what we carry
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Badges ───────────────────────────────────────────────────────────────── */
function Badges() {
  const items = [
    "Fresh Daily Deliveries",
    "Authentic Polish",
    "3 NYC Bakeries",
    "Made-to-Order Deli",
    "Hot Food Bar",
    "Pocono Region",
  ];
  return (
    <div style={{ background: "var(--black)", borderBottom: "3px solid var(--red)" }}>
      <div className="wrap" style={{ padding: "0 36px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, padding: "22px 0" }}>
          {items.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section header ────────────────────────────────────────────────────────── */
function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-end mb-16">
      <div>
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h2 className="font-serif font-medium tracking-[-0.02em] leading-[1.05]" style={{ fontSize: "clamp(36px, 4.5vw,62px)", color: "var(--black)" }}>
          {title}
        </h2>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body)" }}>{lead}</p>
    </div>
  );
}

/* ─── Menu ─────────────────────────────────────────────────────────────────── */
function Menu() {
  return (
    <section id="menu" className="section scroll-mt-20" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <SectionHead
          eyebrow="What we carry"
          title={<>Everything you love about <em style={{ color: "var(--red)", fontStyle: "italic" }}>Polish food.</em></>}
          lead="From the deli counter to imported pantry staples — Biedronka carries an authentic selection that gives the Pocono region a genuine taste of Poland."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden"
              style={{
                background: c.featured ? "var(--black)" : "var(--white)",
                border: c.featured ? "none" : "1.5px solid var(--gray-mid)",
                borderRadius: 8,
                boxShadow: c.featured ? "0 4px 24px rgba(0,0,0,0.18)" : "0 1px 4px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
            >
              {/* Image */}
              <div className={`relative w-full shrink-0 ${c.featured ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {c.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white rounded" style={{ background: "var(--red)" }}>
                    Signature
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] mb-5" style={{ color: c.featured ? "var(--red)" : "var(--red)" }}>
                  {c.num}
                </div>
                <h3 className="font-serif font-semibold leading-[1.12] mb-3" style={{ fontSize: "clamp(20px,1.8vw,26px)", color: c.featured ? "#fff" : "var(--black)" }}>
                  {c.title}
                </h3>
                <p className="text-[14px] leading-[1.7] mb-6 flex-1" style={{ color: c.featured ? "rgba(255,255,255,0.70)" : "var(--body)" }}>
                  {c.body}
                </p>
                <div
                  className="mt-auto pt-5 flex justify-between items-center text-[11px] font-bold tracking-[0.1em] uppercase"
                  style={{
                    borderTop: c.featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--gray)",
                    color: c.featured ? "rgba(255,255,255,0.45)" : "var(--muted)",
                  }}
                >
                  <span>{c.meta}</span>
                  <span className="transition-transform group-hover:translate-x-1 text-base" style={{ color: "var(--red)" }}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee ──────────────────────────────────────────────────────────────── */
function Marquee() {
  const block = (
    <span className="inline-flex items-center gap-10">
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-10">
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", display: "inline-block", opacity: 0.6 }} />
          <span style={{ fontWeight: 700, letterSpacing: "0.05em" }}>{item}</span>
        </span>
      ))}
    </span>
  );
  return (
    <div style={{ background: "var(--red)", color: "#fff", padding: "18px 0", overflow: "hidden", borderTop: "3px solid var(--red-dark)", borderBottom: "3px solid var(--red-dark)" }}>
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: 13, animation: "marquee 45s linear infinite" }}
      >
        {block}
        <span aria-hidden>{block}</span>
      </div>
    </div>
  );
}

/* ─── About ────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="section scroll-mt-20" style={{ background: "var(--gray)" }}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="eyebrow mb-5">Our Story</div>
          <h2 className="font-serif font-medium tracking-[-0.02em] leading-[1.05] mb-7" style={{ fontSize: "clamp(36px,4.5vw,62px)", color: "var(--black)" }}>
            A deli named after a{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>ladybug.</em>
          </h2>
          <p className="text-base leading-[1.8] mb-5 max-w-[54ch]" style={{ color: "var(--body)" }}>
            &ldquo;Biedronka&rdquo; is the Polish word for ladybug — small, familiar, and beloved.
            Owner Klaudia built Biedronka-Poconos to bring genuine Polish flavors to the
            Stroudsburg community with the warmth and personal touch of a neighborhood shop.
          </p>
          <p className="text-base leading-[1.8] mb-5 max-w-[54ch]" style={{ color: "var(--body)" }}>
            Baked goods arrive fresh from three New York City bakeries — bread and pastries
            delivered Monday, Wednesday, and Thursday through Saturday. Meats arrive Thursday
            and Friday so you always get product at its peak.
          </p>
          <p className="text-base leading-[1.8] max-w-[54ch]" style={{ color: "var(--body)" }}>
            Recently moved into a new, larger building right next to the original location.
            Same neighborhood. More space. Same dedication to quality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-10 pt-10" style={{ borderTop: "2px solid var(--gray-mid)" }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif font-bold leading-none tracking-tight" style={{ fontSize: 52, color: "var(--black)" }}>
                  {s.n}<em style={{ color: "var(--red)", fontStyle: "normal" }}>{s.em}</em>
                </div>
                <div className="mt-2 text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "var(--muted)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative" style={{ aspectRatio: "4/5" }}>
          <Image
            src={BIEDRONKA_PHOTOS.p2}
            alt="Inside Biedronka Deli"
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Badge */}
          <div
            className="absolute -bottom-6 -right-6 max-lg:-bottom-4 max-lg:-right-4 flex flex-col items-center justify-center text-center rounded-full font-serif text-white shadow-xl"
            style={{
              width: 148,
              height: 148,
              background: "var(--red)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1.3,
            }}
          >
            <span style={{ fontSize: 11, opacity: 0.85 }}>Serving</span>
            <em style={{ display: "block", fontStyle: "normal", fontSize: 28, fontWeight: 800, letterSpacing: 0, lineHeight: 1.1, margin: "4px 0" }}>
              Poconos
            </em>
            <span style={{ fontSize: 10, opacity: 0.75 }}>Stroudsburg PA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Hours ────────────────────────────────────────────────────────────────── */
function Hours() {
  const schedule = [
    { day: "Monday",    hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Tuesday",   hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Thursday",  hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Friday",    hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Saturday",  hours: "9:00 AM – 6:00 PM", today: false },
    { day: "Sunday",    hours: "10:00 AM – 4:00 PM", today: false },
  ];

  return (
    <section id="hours" className="section scroll-mt-20" style={{ background: "var(--white)", borderTop: "1px solid var(--gray)" }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Find us"
          title={<>Hours &amp; <em style={{ color: "var(--red)", fontStyle: "italic" }}>Location</em></>}
          lead="Located in Stroudsburg — stop in, browse, and let our staff guide you through the selection. Parking available in front and on the side."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Hours table */}
          <div>
            <div style={{ border: "1.5px solid var(--gray)", borderRadius: 8, overflow: "hidden" }}>
              {schedule.map((row, i) => (
                <div
                  key={row.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    borderBottom: i < schedule.length - 1 ? "1px solid var(--gray)" : "none",
                    background: row.day === "Sunday" ? "var(--gray)" : "#fff",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 14, color: "var(--black)" }}>{row.day}</span>
                  <span style={{ fontSize: 14, color: row.day === "Sunday" ? "var(--muted)" : "var(--charcoal)", fontWeight: 500 }}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery schedule */}
            <div style={{ marginTop: 20, padding: "20px 24px", background: "var(--red-pale)", border: "1.5px solid var(--border-red)", borderRadius: 8 }}>
              <div className="eyebrow mb-4">Fresh delivery schedule</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { what: "Fresh bread & pastries", when: "Mon · Wed · Thu · Fri · Sat" },
                  { what: "Fresh meat delivery",    when: "Thursday & Friday" },
                ].map(d => (
                  <div key={d.what} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--red)", marginTop: 2, flexShrink: 0 }}>●</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--black)" }}>{d.what}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{d.when}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 8, paddingTop: 12, borderTop: "1px solid var(--border-red)", fontSize: 12, color: "var(--muted)" }}>
                  $10 minimum for credit card purchases.
                </div>
              </div>
            </div>
          </div>

          {/* Address + map */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ padding: "28px 32px", border: "1.5px solid var(--gray)", borderRadius: 8, background: "var(--white)" }}>
              <div className="eyebrow mb-4">Address</div>
              <address className="not-italic">
                <div className="font-serif font-bold" style={{ fontSize: 28, color: "var(--black)", lineHeight: 1.2 }}>354 N 9th St</div>
                <div className="font-serif" style={{ fontSize: 22, color: "var(--charcoal)", lineHeight: 1.2, marginBottom: 16 }}>Stroudsburg, PA 18360</div>
                <a href="tel:+15707304464" className="font-serif font-bold" style={{ fontSize: 26, color: "var(--red)", display: "block", marginBottom: 4 }}>
                  (570) 730-4464
                </a>
                <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 20 }}>Parking available in front and on the side</div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A" target="_blank" rel="noopener noreferrer" className="btn-red" style={{ fontSize: 12, padding: "10px 18px" }}>
                    Get Directions →
                  </a>
                  <a href="https://www.facebook.com/BiedronkaPoconos/" target="_blank" rel="noopener noreferrer" className="btn-black" style={{ fontSize: 12, padding: "10px 18px" }}>
                    Facebook →
                  </a>
                </div>
              </address>
            </div>

            <div style={{ borderRadius: 8, overflow: "hidden", border: "1.5px solid var(--gray)", height: 260 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.745!2d-75.208416!3d40.987202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c48971cca54e1d%3A0xc9532eb925ef3e8c!2sBiedronka%20Deli!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biedronka Deli location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" className="section scroll-mt-20" style={{ background: "var(--red-pale)", borderTop: "1px solid var(--border-red)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="eyebrow" style={{ display: "inline-block", marginBottom: 16 }}>What customers say</div>
          <h2 className="font-serif font-medium tracking-[-0.02em]" style={{ fontSize: "clamp(36px,4.5vw,62px)", color: "var(--black)", marginTop: 12 }}>
            Worth the drive.
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 12 }}>
            Real Google reviews — 77+ and counting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.who + t.role}
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "28px 28px 24px",
                border: "1.5px solid var(--border-red)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 12px rgba(204,31,31,0.06)",
              }}
            >
              {/* Stars */}
              <div style={{ color: "var(--red)", fontSize: 13, letterSpacing: 3, marginBottom: 14 }}>★★★★★</div>

              {/* Quote */}
              <p className="font-serif italic flex-1" style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--charcoal)", marginBottom: 20 }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Reviewer */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--gray)" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "var(--red)", color: "#fff",
                  display: "grid", placeItems: "center",
                  fontFamily: "var(--font-display), serif",
                  fontWeight: 700, fontSize: 14, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "var(--black)" }}>{t.who}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2, letterSpacing: "0.02em" }}>
                    {t.role} · Google Maps
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Photo strip ──────────────────────────────────────────────────────────── */
function PhotoStrip() {
  return (
    <div style={{ display: "flex", gap: 3, overflow: "hidden", borderTop: "4px solid var(--red)" }}>
      {stripImages.map((img) => (
        <div
          key={img.src}
          style={{ position: "relative", flexShrink: 0, flex: 1, height: 300, minWidth: "60vw" }}
          className="md:min-w-0"
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 60vw, 20vw" />
        </div>
      ))}
    </div>
  );
}

/* ─── Contact ──────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="section scroll-mt-20" style={{ background: "var(--white)", borderTop: "1px solid var(--gray)" }}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow mb-5">Get in touch</div>
          <h2 className="font-serif font-medium tracking-[-0.02em] leading-[1.05] mb-7" style={{ fontSize: "clamp(36px,4.5vw,62px)", color: "var(--black)" }}>
            Send us a{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>message.</em>
          </h2>
          <p style={{ color: "var(--body)", maxWidth: "46ch", marginBottom: 32, lineHeight: 1.75 }}>
            Have a question about our selection, want to check when a product arrives, or
            planning a special order? Reach out and we&apos;ll get back to you quickly.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
            {[
              "Authentic Polish products and fresh deli",
              "Bread & pastries fresh from NYC bakeries",
              "Meat delivered Thursday & Friday",
              "$10 minimum for card purchases",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--gray)", fontSize: 15, color: "var(--charcoal)" }}>
                <span style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }}>●</span>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ padding: "24px 28px", background: "var(--gray)", borderRadius: 8, borderLeft: "4px solid var(--red)" }}>
            <div className="eyebrow mb-3">Call or visit us</div>
            <a href="tel:+15707304464" className="font-serif font-bold" style={{ fontSize: 30, color: "var(--black)", display: "block", lineHeight: 1 }}>
              (570) 730-4464
            </a>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>354 N 9th St, Stroudsburg, PA 18360</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 3 }}>Mon–Sat 9 AM–6 PM · Sun 10 AM–4 PM</div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
