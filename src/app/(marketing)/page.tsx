import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const HERO_IMG =
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=2000&q=80";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=1200&q=80";

const categories = [
  {
    num: "01 — Signature",
    title: "Smoked Meats & Kielbasa",
    body: "Authentic Polish sausages and smoked meats — the heart of the deli. Fresh inventory arrives Thursday and Friday so you always get the best cut.",
    meta: "Kielbasa · Smoked · Cured",
    featured: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    imgAlt: "Assorted smoked sausages and kielbasa at the deli counter",
  },
  {
    num: "02",
    title: "Polish Pastries & Bread",
    body: "Donuts, cakes, rolls, and bread sourced fresh from three New York City bakeries. Delivered Monday, Wednesday, and Thursday through Saturday.",
    meta: "Donuts · Cakes · Rolls",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    imgAlt: "Fresh Polish pastries and bread loaves from the bakery",
  },
  {
    num: "03",
    title: "Pierogis & Prepared Foods",
    body: "Traditional pierogis and a rotating selection of authentic Polish prepared foods — ready to take home and enjoy.",
    meta: "Pierogis · Ready-Made · Polish",
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
    imgAlt: "Freshly made pierogis and prepared Polish dishes",
  },
  {
    num: "04",
    title: "Hot Food Bar",
    body: "Our new hot food bar offers warm, freshly prepared dishes ready to go. Hearty, authentic, and worth the drive — as our customers say.",
    meta: "Hot · Fresh · Daily",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    imgAlt: "Hot food bar with freshly prepared Polish dishes",
  },
  {
    num: "05",
    title: "Imported Groceries",
    body: "A curated selection of imported Polish snacks, candies, jarred pickles, condiments, and pantry staples you won't find anywhere else in the Poconos.",
    meta: "Imported · Pantry · Polish",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    imgAlt: "Shelves of imported Polish grocery products and pantry items",
  },
  {
    num: "06",
    title: "Made-to-Order Deli",
    body: "Step up to the counter for a freshly made sandwich or salad. Our staff knows the menu inside out and will help you build exactly what you're craving.",
    meta: "Sandwiches · Salads · Custom",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
    imgAlt: "Deli counter with fresh meats and cheese for made-to-order sandwiches",
  },
];

const stats = [
  { n: "4.5", em: "★", l: "Average Rating" },
  { n: "77", em: "+", l: "Customer Reviews" },
  { n: "3", em: "", l: "NYC Bakeries Sourced" },
  { n: "6", em: "", l: "Days Fresh Delivery" },
];

const testimonials = [
  {
    quote:
      "Best Polish Deli in the PA area — food is always fresh and staff is always ready to help out.",
    who: "Google Reviewer",
    role: "Stroudsburg, PA",
  },
  {
    quote:
      "The owner Klaudia is such a wonderful person. So clean, organized, and professional. Large selection of everything you could want.",
    who: "Verified Customer",
    role: "August 2024",
  },
  {
    quote:
      "Large selection. They now have a hot bar of food. Food is tasty. Worth the drive.",
    who: "Google Reviewer",
    role: "December 2025",
  },
  {
    quote:
      "Lovely people, delicious, authentic foods. An impressive selection of meats, breads, and products — just like a great NYC deli.",
    who: "Verified Customer",
    role: "Pocono Mountains",
  },
];

const marqueeItems = [
  "Kielbasa",
  "Pierogi",
  "Fresh Daily",
  "Polish Pastries",
  "NYC Bakeries",
  "Smoked Meats",
  "Imported Goods",
  "Made to Order",
  "Stroudsburg PA",
  "Hot Food Bar",
];

const stripImages = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    alt: "Assorted smoked sausages and cured meats",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    alt: "Fresh Polish bread and pastries",
  },
  {
    src: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
    alt: "Deli counter with fresh meats and cheeses",
  },
  {
    src: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
    alt: "Pierogis and Polish prepared foods",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Freshly prepared hot dishes",
  },
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

function Hero() {
  return (
    <section className="grain relative min-h-[92vh] flex items-end pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center brightness-[0.5] saturate-90"
        style={{ backgroundImage: `url('${HERO_IMG}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,22,34,0.65) 0%, rgba(14,22,34,0.15) 40%, rgba(14,22,34,0.92) 100%)",
        }}
      />
      <div className="wrap relative">
        <div className="eyebrow on-dark mb-6">Authentic Polish Deli · Stroudsburg, PA</div>
        <h1 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(54px,7vw,104px)] text-cream max-w-[14ch] mb-7">
          Polish flavors,
          <br />
          <em className="italic font-normal" style={{ color: "var(--red-soft)" }}>right here</em>{" "}
          in the Poconos.
        </h1>
        <p className="text-[17px] leading-relaxed text-cream/85 mb-9 max-w-[52ch]">
          Fresh kielbasa, pierogi, smoked meats, NYC bakery pastries, and imported Polish
          groceries — all in one spot in Stroudsburg.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a href="tel:+15707304464" className="btn-red">
            Call (570) 730-4464 →
          </a>
          <a href="#menu" className="btn-ghost">
            See what we carry
          </a>
        </div>
      </div>
    </section>
  );
}

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
    <div className="bg-paper-2 border-y border-ink/[0.12] py-7">
      <div className="wrap flex justify-between items-center gap-10 flex-wrap">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-[13px] font-medium tracking-[0.04em] text-ink"
          >
            <span className="text-sm" style={{ color: "var(--red)" }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-end mb-[72px]">
      <div>
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)]">
          {title}
        </h2>
      </div>
      <p className="text-[17px] leading-relaxed text-slate">{lead}</p>
    </div>
  );
}

function Menu() {
  return (
    <section id="menu" className="section scroll-mt-20">
      <div className="wrap">
        <SectionHead
          eyebrow="What we carry"
          title={
            <>
              Everything you love about{" "}
              <em className="italic font-normal" style={{ color: "var(--red-deep)" }}>
                Polish food.
              </em>
            </>
          }
          lead="From the deli counter to imported pantry staples — Biedronka carries an authentic selection that gives the Pocono region a taste of Poland."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <article
              key={c.title}
              className={`group rounded-2xl shadow-sm ring-1 flex flex-col overflow-hidden transition-colors ${
                c.featured
                  ? "grain bg-ink text-cream ring-white/[0.08] hover:bg-ink-2"
                  : "bg-paper ring-ink/[0.08] hover:bg-[#FBF8F1]"
              }`}
            >
              <div className={`relative w-full shrink-0 ${c.featured ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div
                  className="font-serif text-[14px] font-medium tracking-[0.02em] mb-7"
                  style={{ color: c.featured ? "var(--red-soft)" : "var(--red-deep)" }}
                >
                  {c.num}
                </div>
                <h3
                  className={`font-serif font-semibold tracking-[-0.01em] text-[clamp(24px,2vw,30px)] leading-[1.1] mb-3.5 ${
                    c.featured ? "text-cream" : "text-ink"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`text-[14.5px] leading-[1.65] mb-6 ${
                    c.featured ? "text-cream/75" : "text-slate"
                  }`}
                >
                  {c.body}
                </p>
                <div
                  className={`mt-auto pt-6 border-t flex justify-between items-center text-[12px] tracking-[0.08em] uppercase ${
                    c.featured
                      ? "border-cream/[0.14] text-cream/60"
                      : "border-ink/[0.12] text-slate-2"
                  }`}
                >
                  <span>{c.meta}</span>
                  <span
                    className="text-base transition-transform group-hover:translate-x-1"
                    style={{ color: c.featured ? "var(--red-soft)" : "var(--red-deep)" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const block = (
    <span className="inline-flex items-center gap-12">
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-12">
          <span style={{ color: "var(--red-soft)" }}>✦</span>
          {item}
        </span>
      ))}
    </span>
  );
  return (
    <div
      className="grain py-6 overflow-hidden border-y"
      style={{ background: "var(--ink)", color: "var(--red-soft)", borderColor: "var(--line-on-dark)" }}
    >
      <div
        className="flex gap-12 whitespace-nowrap font-serif text-[22px] tracking-[0.01em]"
        style={{ animation: "marquee 50s linear infinite" }}
      >
        {block}
        <span aria-hidden>{block}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section bg-cream scroll-mt-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="eyebrow mb-[22px]">Our Story</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mb-7">
            A deli named after a{" "}
            <em className="italic font-normal" style={{ color: "var(--red-deep)" }}>
              ladybug.
            </em>
          </h2>
          <p className="text-base leading-[1.75] text-slate mb-[18px] max-w-[54ch]">
            &ldquo;Biedronka&rdquo; is the Polish word for ladybug — small, familiar, and beloved.
            That spirit guides everything we do at the deli. Owner Klaudia built Biedronka-Poconos
            to bring genuine Polish flavors to the Stroudsburg community, with the warmth and
            personal touch of a neighborhood shop.
          </p>
          <p className="text-base leading-[1.75] text-slate mb-[18px] max-w-[54ch]">
            Our baked goods are sourced from three different New York City bakeries, with fresh
            bread and pastry deliveries rolling in Monday, Wednesday, and Thursday through
            Saturday. Meats arrive Thursday and Friday — so you always get product at its peak.
          </p>
          <p className="text-base leading-[1.75] text-slate max-w-[54ch]">
            We recently moved into a new, larger building right next to the original location —
            same neighborhood, more space, same dedication to quality. Come in and see what
            everyone&apos;s talking about.
          </p>

          <div className="grid grid-cols-2 gap-9 pt-10 mt-9 border-t border-ink/[0.12]">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-[56px] font-medium leading-none text-ink tracking-[-0.015em]">
                  {s.n}
                  <em className="italic font-normal" style={{ color: "var(--red)" }}>
                    {s.em}
                  </em>
                </div>
                <div className="mt-2.5 text-[12px] tracking-[0.16em] uppercase text-slate-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-paper ring-1 ring-ink/[0.08]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${ABOUT_IMG}')` }}
          />
          <div
            className="absolute -right-7 -bottom-7 size-[170px] rounded-full grid place-items-center text-center font-serif text-[13px] font-medium tracking-[0.12em] uppercase leading-[1.4] shadow-[0_20px_40px_rgba(14,22,34,0.2)] max-lg:-right-4 max-lg:-bottom-4 max-lg:size-[130px] max-lg:text-[11px]"
            style={{ background: "var(--red)", color: "var(--cream)" }}
          >
            Serving the
            <em className="block italic normal-case text-[26px] tracking-normal font-medium my-1 max-lg:text-[20px]">
              Poconos
            </em>
            Stroudsburg PA
          </div>
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const schedule = [
    { day: "Monday", hours: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
    { day: "Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
  ];

  const deliveries = [
    { day: "Mon · Wed · Thu · Fri · Sat", what: "Fresh bread & pastries" },
    { day: "Thursday & Friday", what: "Fresh meat delivery" },
  ];

  return (
    <section id="hours" className="section bg-paper border-y border-ink/[0.12] scroll-mt-20">
      <div className="wrap">
        <SectionHead
          eyebrow="Find us"
          title={
            <>
              Hours &amp;{" "}
              <em className="italic font-normal" style={{ color: "var(--red-deep)" }}>
                Location
              </em>
            </>
          }
          lead="Conveniently located in Stroudsburg — stop in, browse, and let our staff guide you through the selection."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-10">
              {schedule.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex justify-between items-center py-4 text-[15px] ${
                    i < schedule.length - 1 ? "border-b border-ink/[0.1]" : ""
                  } ${row.day === "Sunday" ? "text-slate" : "text-ink"}`}
                >
                  <span className="font-medium">{row.day}</span>
                  <span className={row.day === "Sunday" ? "text-slate-2" : ""}>{row.hours}</span>
                </div>
              ))}
            </div>

            <div
              className="p-7 ring-1 ring-ink/[0.08]"
              style={{ background: "var(--paper-2)" }}
            >
              <div className="eyebrow mb-4">Fresh delivery schedule</div>
              {deliveries.map((d) => (
                <div key={d.day} className="flex gap-4 mb-4 last:mb-0">
                  <span
                    className="text-[14px] mt-0.5 shrink-0"
                    style={{ color: "var(--red)" }}
                  >
                    ✦
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink">{d.what}</div>
                    <div className="text-[12px] text-slate-2 mt-0.5">{d.day}</div>
                  </div>
                </div>
              ))}
              <div className="mt-5 pt-5 border-t border-ink/[0.1] text-[12px] text-slate-2">
                $10 minimum for credit card purchases.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div
              className="p-8 ring-1 ring-ink/[0.08]"
              style={{ background: "var(--cream)" }}
            >
              <div className="eyebrow mb-4">Address</div>
              <address className="not-italic">
                <div className="font-serif text-[26px] font-medium text-ink leading-[1.2] mb-1">
                  354 N 9th St
                </div>
                <div className="font-serif text-[22px] text-ink leading-[1.2] mb-4">
                  Stroudsburg, PA 18360
                </div>
                <a
                  href="tel:+15707304464"
                  className="font-serif text-[26px] font-medium leading-none block mb-4"
                  style={{ color: "var(--red)" }}
                >
                  (570) 730-4464
                </a>
                <div className="text-[13px] text-slate-2">Parking available in front and on the side</div>
              </address>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://maps.app.goo.gl/Ji2ehZkUB54H45C1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red text-[12px] py-2.5 px-4"
                >
                  Get Directions →
                </a>
                <a
                  href="https://www.facebook.com/BiedronkaPoconos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink text-[12px] py-2.5 px-4"
                >
                  Facebook →
                </a>
              </div>
            </div>

            <div className="relative w-full h-[260px] rounded overflow-hidden ring-1 ring-ink/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.745!2d-75.208416!3d40.987202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c48971cca54e1d%3A0xc9532eb925ef3e8c!2sBiedronka%20Deli!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biedronka Deli location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-cream text-center scroll-mt-20">
      <div className="wrap">
        <div className="mb-[72px]">
          <div className="eyebrow inline-block mb-[18px]">What customers say</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mt-3.5">
            Worth the drive.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {testimonials.map((t) => (
            <div
              key={t.who + t.role}
              className="bg-paper rounded-2xl shadow-sm ring-1 ring-ink/[0.08] p-10 flex flex-col min-h-[280px]"
            >
              <div className="text-[14px] tracking-[2px] mb-6" style={{ color: "var(--red)" }}>
                ★★★★★
              </div>
              <p className="font-serif italic text-[19px] leading-[1.55] text-ink mb-7 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-ink/[0.12]">
                <div className="font-semibold text-[14px] text-ink">{t.who}</div>
                <div className="text-[12px] text-slate-2 mt-0.5 tracking-[0.02em]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  return (
    <div className="flex gap-0.5 overflow-x-auto" style={{ scrollSnapType: "x mandatory" }}>
      {stripImages.map((img) => (
        <div
          key={img.src}
          className="relative shrink-0 flex-1 h-[280px] min-w-[65vw] md:min-w-0"
          style={{ scrollSnapAlign: "start" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 65vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-paper scroll-mt-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow mb-[22px]">Get in touch</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mb-7">
            Send us a{" "}
            <em className="italic font-normal" style={{ color: "var(--red-deep)" }}>
              message.
            </em>
          </h2>
          <p className="text-slate max-w-[46ch] mb-8 leading-[1.7]">
            Have a question about our selection, want to know when a product arrives, or planning
            a special order? Reach out and we&apos;ll get back to you quickly.
          </p>

          <ul className="list-none p-0 mb-10">
            {[
              "Authentic Polish products and fresh deli",
              "Fresh bread and pastries from NYC bakeries",
              "Meat delivered Thursday & Friday",
              "$10 minimum for card purchases",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 py-3.5 border-b border-ink/[0.12] text-[15px]"
              >
                <span className="text-[14px] mt-0.5 shrink-0" style={{ color: "var(--red)" }}>
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="p-7 bg-cream ring-1 ring-ink/[0.08]">
            <span className="eyebrow mb-2.5 block">Call or visit us</span>
            <a
              href="tel:+15707304464"
              className="font-serif text-[32px] font-medium block mb-1 leading-none"
              style={{ color: "var(--ink)" }}
            >
              (570) 730-4464
            </a>
            <div className="text-[13px] text-slate-2">
              354 N 9th St, Stroudsburg, PA 18360
            </div>
            <div className="text-[13px] text-slate-2 mt-1">
              Mon–Sat 9 AM–6 PM &nbsp;·&nbsp; Sun 10 AM–4 PM
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
