import Image from "next/image";
import { Concierge } from "@/components/Concierge";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const images = {
  boutique: "https://www.limassoldelmar.com/wp-content/uploads/2025/06/be-bloomy-2.jpg",
  bouquet: "https://images.unsplash.com/photo-1704177094380-ab854ad5a93b?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  eventWarm: "https://images.unsplash.com/photo-1751257567128-a90534b263e6?auto=format&fit=crop&fm=jpg&q=88&w=2200",
  eventWhite: "https://images.unsplash.com/photo-1769812343531-cfe6bc93905e?auto=format&fit=crop&fm=jpg&q=88&w=2200",
  eventTable: "https://images.unsplash.com/photo-1769812343775-85a27e6a076c?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  dried: "https://images.unsplash.com/photo-1533802228923-3e6de1b76779?auto=format&fit=crop&fm=jpg&q=88&w=1800",
};

const services = [
  {
    number: "01",
    title: "A bouquet for today",
    copy: "Tell us the occasion, colour direction and budget. A florist will confirm what is freshest and available.",
    action: "Start a bouquet brief",
  },
  {
    number: "02",
    title: "A composition made around someone",
    copy: "Personal arrangements for birthdays, romance, gratitude and moments that do not fit a standard catalogue.",
    action: "Describe the person",
  },
  {
    number: "03",
    title: "Flowers for a room or event",
    copy: "Table flowers, welcome arrangements and floral styling that work with the space rather than compete with it.",
    action: "Discuss the setting",
  },
  {
    number: "04",
    title: "A thoughtful gift, completed",
    copy: "Flowers can be paired with selected decor and gifting details from the boutique, subject to current availability.",
    action: "Build a gift",
  },
];

const directions = [
  {
    label: "Soft / tonal",
    title: "Quiet colour, generous texture",
    image: images.bouquet,
    alt: "Soft cream, blush and violet bouquet used as visual direction",
  },
  {
    label: "Clean / architectural",
    title: "White flowers with a strong silhouette",
    image: images.eventWhite,
    alt: "White floral table arrangement used as visual direction",
  },
  {
    label: "Warm / expressive",
    title: "Colour that changes the atmosphere",
    image: images.eventWarm,
    alt: "Warm floral event installation used as visual direction",
  },
];

const steps = [
  ["01", "Send the brief", "Occasion, mood, budget, timing and delivery area."],
  ["02", "Florist confirms", "Seasonal availability, composition and final details."],
  ["03", "We prepare and deliver", "The order is assembled personally and handed over at the agreed time."],
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="section-label">Maison of flowers · Limassol</p>
          <h1>
            Flowers for the moment
            <span>you actually mean.</span>
          </h1>
          <p className="hero-lead">
            Fresh and unusual flowers, personal guidance and a clear way to order — from a single bouquet to complete floral styling.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#concierge">
              Start an order <span aria-hidden="true">↗</span>
            </a>
            <a className="inline-link" href="#directions">
              Explore floral directions <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Service highlights">
            <span>Open daily 10:00–20:00</span>
            <span>Personal florist guidance</span>
            <span>Limassol delivery</span>
          </div>
        </div>

        <div className="hero-media">
          <Image
            src={images.boutique}
            alt="Fresh flowers inside the BeBloomy boutique at Limassol Del Mar"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <div className="hero-media-shade" />
          <div className="hero-media-top">
            <span>BeBloomy / Del Mar</span>
            <span>117–123 Georgiou A Street</span>
          </div>
          <div className="hero-media-bottom">
            <p>Walk in for flowers.<br />Message ahead for something personal.</p>
            <a href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">
              Telegram concierge ↗
            </a>
          </div>
        </div>
      </section>

      <section className="brand-note shell" aria-label="BeBloomy service statement">
        <p>Not a catalogue of identical bouquets.</p>
        <p>One conversation, one clear direction, one arrangement made for the moment.</p>
      </section>

      <section id="services" className="services shell section-space">
        <div className="section-intro">
          <p className="section-label">What can we arrange?</p>
          <h2>Start with the need, not a product code.</h2>
          <p>
            BeBloomy is positioned as a personal flower service. The website makes the first step simple without replacing the florist’s judgement.
          </p>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <Reveal key={service.number} className="service-item" delay={index * 45}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <a href="#concierge">{service.action} ↗</a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="directions" className="directions section-space">
        <div className="shell">
          <div className="directions-head">
            <div>
              <p className="section-label">Floral directions</p>
              <h2>A visual starting point, never a rigid template.</h2>
            </div>
            <p>
              Final flowers depend on season and availability. These references help a customer communicate the mood before the florist proposes a composition.
            </p>
          </div>

          <div className="direction-grid">
            {directions.map((item, index) => (
              <Reveal key={item.label} className={`direction-card direction-card-${index + 1}`} delay={index * 70}>
                <div className="direction-image">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 34vw" />
                </div>
                <div className="direction-meta">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <a href="#concierge" aria-label={`Choose ${item.label} direction`}>Choose this direction ↗</a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="imagery-note">Concept imagery is used to establish art direction until BeBloomy supplies a final production library.</p>
        </div>
      </section>

      <section className="process shell section-space">
        <div className="process-copy">
          <p className="section-label">How the order works</p>
          <h2>Three steps. No guessing.</h2>
          <p>A simple digital brief starts the conversation. The florist remains responsible for the final recommendation.</p>
        </div>
        <div className="process-steps">
          {steps.map(([number, title, copy]) => (
            <div className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="events">
        <div className="events-image">
          <Image src={images.eventTable} alt="Floral centrepiece at an elegant event table" fill sizes="100vw" />
          <div className="events-overlay" />
        </div>
        <div className="events-content shell">
          <p className="section-label section-label-light">Events and spaces</p>
          <h2>Flowers should belong to the room.</h2>
          <p>
            From a welcome arrangement to a full table composition, the direction begins with scale, light, colour and the way people will use the space.
          </p>
          <div className="events-actions">
            <a className="button button-light" href="#concierge">Brief an event <span>↗</span></a>
            <span>Private occasions · Dinners · Brand moments · Hospitality</span>
          </div>
        </div>
      </section>

      <section className="craft shell section-space">
        <div className="craft-gallery">
          <div className="craft-photo craft-photo-main">
            <Image src={images.eventWhite} alt="White flowers arranged for a formal table" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="craft-photo craft-photo-small">
            <Image src={images.dried} alt="Dried floral composition used as an alternative texture direction" fill sizes="(max-width: 900px) 50vw, 24vw" />
          </div>
        </div>
        <div className="craft-copy">
          <p className="section-label">The BeBloomy standard</p>
          <h2>Freshness, unusual material and service that feels personal.</h2>
          <p>
            Public brand materials describe BeBloomy as a premium flower brand focused on high-level service and compositions made from fresh, unusual flowers. The redesigned experience turns that promise into a clear customer journey.
          </p>
          <dl>
            <div><dt>Selection</dt><dd>Seasonal flowers chosen for form, colour and condition.</dd></div>
            <div><dt>Direction</dt><dd>A composition shaped around the customer, space and occasion.</dd></div>
            <div><dt>Confirmation</dt><dd>Details agreed directly before preparation and delivery.</dd></div>
          </dl>
        </div>
      </section>

      <section id="concierge" className="concierge-section section-space">
        <div className="shell concierge-layout">
          <div className="concierge-intro">
            <p className="section-label">Personal flower concierge</p>
            <h2>Give the florist a useful brief in under a minute.</h2>
            <p>
              Choose the occasion, visual direction, timing and budget. Telegram opens with a structured message ready for review.
            </p>
            <div className="concierge-details">
              <span>No payment at this step</span>
              <span>Availability confirmed personally</span>
              <span>Final composition agreed before preparation</span>
            </div>
          </div>
          <Concierge />
        </div>
      </section>

      <section id="visit" className="visit shell section-space">
        <div className="visit-card">
          <div className="visit-heading">
            <p className="section-label">Visit / contact</p>
            <h2>BeBloomy at Limassol Del Mar.</h2>
          </div>
          <div className="visit-grid">
            <div>
              <span>Address</span>
              <p>117–123 Georgiou A Street<br />Germasogeia 4048, Limassol</p>
            </div>
            <div>
              <span>Hours</span>
              <p>Monday–Sunday<br />10:00–20:00</p>
            </div>
            <div>
              <span>Contact</span>
              <p><a href="tel:+35799228323">+357 99 228323</a><br /><a href="mailto:bebloomycy@gmail.com">bebloomycy@gmail.com</a></p>
            </div>
            <div>
              <span>Social</span>
              <p><a href="https://instagram.com/bebloomy_cy" target="_blank" rel="noreferrer">Instagram ↗</a><br /><a href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">Telegram ↗</a></p>
            </div>
          </div>
          <div className="visit-actions">
            <a className="button button-dark" href="https://maps.google.com/?q=117-123+Georgiou+A+Street+Germasogeia+4048+Cyprus" target="_blank" rel="noreferrer">
              Open in maps <span>↗</span>
            </a>
            <a className="inline-link" href="https://t.me/BeBloomyCY" target="_blank" rel="noreferrer">Message the boutique ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-mark">Be Bloomy</div>
        <div className="footer-copy">
          <p>Flowers & decor · Limassol, Cyprus</p>
          <p>Digital concept by <strong>DUONIQ</strong></p>
        </div>
        <div className="footer-legal">
          <span>© 2026 BeBloomy Ltd.</span>
          <span>Concept imagery includes licensed Unsplash references pending final brand photography.</span>
        </div>
      </footer>
    </main>
  );
}
