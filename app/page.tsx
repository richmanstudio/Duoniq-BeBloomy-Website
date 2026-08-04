import Image from "next/image";
import { Concierge } from "@/components/Concierge";
import { Header } from "@/components/Header";
import { LeafMark } from "@/components/LeafMark";
import { Reveal } from "@/components/Reveal";

const officialImage = "https://www.limassoldelmar.com/wp-content/uploads/2025/06/be-bloomy-2.jpg";

const collections = [
  {
    number: "01",
    title: "Soft gestures",
    copy: "Airy, tonal arrangements for the moments that do not need a reason.",
    image: "/images/soft-pink.svg",
    alt: "Editorial blush floral composition",
  },
  {
    number: "02",
    title: "Modern romance",
    copy: "Sculptural flowers with expressive colour, texture and movement.",
    image: "/images/orchids.svg",
    alt: "Ivory orchid-inspired editorial composition",
  },
  {
    number: "03",
    title: "Botanical objects",
    copy: "Living compositions designed for interiors, gifting and arrival moments.",
    image: "/images/green-detail.svg",
    alt: "Dark botanical floral detail",
  },
];

const services = [
  ["01", "Signature bouquets", "Seasonal flowers composed in the distinctive BeBloomy language."],
  ["02", "Celebrations & events", "Floral styling for intimate dinners, launches, weddings and private occasions."],
  ["03", "Home & hospitality", "Thoughtful floral accents for residences, restaurants, hotels and client spaces."],
  ["04", "Personal gifting", "A concierge approach to meaningful gifts, delivered with care across Limassol."],
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="hero-kicker">Flowers & decor · Limassol, Cyprus</p>
          <h1>
            Beauty,
            <span>arranged.</span>
          </h1>
          <p className="hero-intro">
            An exquisite flower boutique where natural form, colour and emotion come together in every arrangement.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#collections">
              Explore the edit <span>↓</span>
            </a>
            <a className="text-link" href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">
              Speak with a florist ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src={officialImage}
              alt="Fresh flowers displayed inside the BeBloomy flower boutique"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="hero-caption">
            <span>BeBloomy / Del Mar</span>
            <span>Open daily 10:00—20:00</span>
          </div>
          <div className="hero-seal" aria-hidden="true">
            <LeafMark />
            <span>Made beautifully · Delivered thoughtfully ·</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="BeBloomy services">
        <div>
          <span>Signature bouquets</span><i>✦</i><span>Event florals</span><i>✦</i><span>Limassol delivery</span><i>✦</i>
          <span>Personal concierge</span><i>✦</i><span>Signature bouquets</span><i>✦</i><span>Event florals</span><i>✦</i>
        </div>
      </div>

      <section id="collections" className="collections section-pad">
        <Reveal className="section-heading">
          <p className="eyebrow">The seasonal edit</p>
          <h2>Flowers with a point of view.</h2>
          <p>Designed around what is freshest, most expressive and right for the moment.</p>
        </Reveal>

        <div className="collection-grid">
          {collections.map((item, index) => (
            <Reveal key={item.title} className={`collection-card collection-${index + 1}`} delay={index * 90}>
              <div className="collection-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
              <div className="collection-meta">
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="round-arrow" aria-hidden="true">↗</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement section-pad">
        <Reveal>
          <p className="eyebrow">Our philosophy</p>
          <p className="statement-text">
            We do not simply wrap flowers. We compose <em>atmosphere, feeling and memory</em> — one stem at a time.
          </p>
        </Reveal>
        <div className="statement-aside">
          <span>Natural</span>
          <span>Expressive</span>
          <span>Personal</span>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <Reveal className="services-intro">
          <p className="eyebrow">What we create</p>
          <h2>Floral design for everyday beauty and extraordinary occasions.</h2>
        </Reveal>

        <div className="service-list">
          {services.map(([number, title, copy], index) => (
            <Reveal key={title} className="service-row" delay={index * 55}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i aria-hidden="true">↗</i>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="events" className="event-feature">
        <div className="event-image">
          <Image src="/images/event-night.svg" alt="Abstract evening floral installation" fill sizes="100vw" />
        </div>
        <div className="event-overlay" />
        <div className="event-content section-pad">
          <Reveal>
            <p className="eyebrow light">Floral environments</p>
            <h2>Make the room feel unforgettable.</h2>
            <p>
              From a single table to a complete celebration, we create floral atmospheres that belong to the place, the people and the occasion.
            </p>
            <a href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">
              Discuss your event <span>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="story section-pad">
        <Reveal className="story-image">
          <Image src="/images/editorial.svg" alt="Editorial floral artwork for BeBloomy" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <span className="image-note">From our Limassol flower room</span>
        </Reveal>
        <Reveal className="story-copy" delay={120}>
          <p className="eyebrow">A local boutique with an international eye</p>
          <h2>Flowers selected for character, not convention.</h2>
          <p>
            BeBloomy brings a refined, contemporary approach to floristry in Limassol. Every arrangement begins with a conversation and ends as something unmistakably personal.
          </p>
          <div className="story-facts">
            <div><strong>7 days</strong><span>Open every week</span></div>
            <div><strong>1:1</strong><span>Personal guidance</span></div>
            <div><strong>CY</strong><span>Created in Limassol</span></div>
          </div>
        </Reveal>
      </section>

      <section className="concierge section-pad">
        <Reveal className="concierge-copy">
          <p className="eyebrow">Not sure what to choose?</p>
          <h2>Tell us the feeling. We will find the flowers.</h2>
          <p>
            Use the quick brief to start a personal conversation with our florist. We will confirm the composition, delivery and final details directly with you.
          </p>
          <div className="concierge-assurance">
            <span>Season-led selection</span>
            <span>Personal confirmation</span>
            <span>Delivery across Limassol</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Concierge />
        </Reveal>
      </section>

      <section id="visit" className="visit section-pad">
        <div className="visit-top">
          <Reveal>
            <p className="eyebrow">Visit BeBloomy</p>
            <h2>Come for flowers. Leave with a feeling.</h2>
          </Reveal>
          <Reveal delay={100} className="visit-details">
            <div>
              <span>Location</span>
              <p>117–123 Georgiou A Street<br />Germasogeia 4048, Limassol</p>
            </div>
            <div>
              <span>Opening hours</span>
              <p>Monday–Sunday<br />10:00–20:00</p>
            </div>
            <div>
              <span>Contact</span>
              <p><a href="tel:+35799228323">+357 99 228323</a><br /><a href="mailto:bebloomycy@gmail.com">bebloomycy@gmail.com</a></p>
            </div>
          </Reveal>
        </div>

        <div className="visit-banner">
          <div className="visit-art" />
          <LeafMark />
          <p>Your perfect flower service in Del Mar, Limassol.</p>
          <a href="https://maps.google.com/?q=117-123+Georgiou+A+Street+Germasogeia+4048+Cyprus" target="_blank" rel="noreferrer">
            Open in maps ↗
          </a>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-brand">
          <LeafMark />
          <span>Be Bloomy</span>
        </div>
        <div className="footer-links">
          <a href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href="tel:+35799228323">Call ↗</a>
          <a href="mailto:bebloomycy@gmail.com">Email ↗</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BeBloomy Ltd. Concept presentation.</span>
          <span>Digital concept by <strong>DUONIQ</strong></span>
        </div>
      </footer>
    </main>
  );
}
