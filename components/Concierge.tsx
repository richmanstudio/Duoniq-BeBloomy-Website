"use client";

import { useMemo, useState } from "react";

const occasions = ["Just because", "Birthday", "Romance", "Celebration"];
const palettes = ["Soft & neutral", "Bright & joyful", "White & green", "Florist’s choice"];
const budgets = ["€60–90", "€90–140", "€140+"];

export function Concierge() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [palette, setPalette] = useState(palettes[0]);
  const [budget, setBudget] = useState(budgets[1]);

  const telegramUrl = useMemo(() => {
    const message = [
      "Hello BeBloomy! I would like help creating a floral order.",
      `Occasion: ${occasion}`,
      `Palette: ${palette}`,
      `Budget: ${budget}`,
      "Please contact me to confirm availability and delivery details.",
    ].join("\n");

    return `https://t.me/BeBloomyCY?text=${encodeURIComponent(message)}`;
  }, [occasion, palette, budget]);

  return (
    <div className="concierge-card">
      <div className="concierge-head">
        <p className="eyebrow">Personal flower concierge</p>
        <span>01 — 03</span>
      </div>

      <fieldset>
        <legend>What are we celebrating?</legend>
        <div className="choice-grid">
          {occasions.map((item) => (
            <button key={item} className={occasion === item ? "selected" : ""} type="button" onClick={() => setOccasion(item)}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Choose a mood</legend>
        <div className="choice-grid palette-grid">
          {palettes.map((item, index) => (
            <button key={item} className={palette === item ? "selected" : ""} type="button" onClick={() => setPalette(item)}>
              <i className={`palette-dot palette-${index + 1}`} />
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Set a comfortable budget</legend>
        <div className="budget-grid">
          {budgets.map((item) => (
            <button key={item} className={budget === item ? "selected" : ""} type="button" onClick={() => setBudget(item)}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <a className="concierge-submit" href={telegramUrl} target="_blank" rel="noreferrer">
        Continue with our florist <span>↗</span>
      </a>
      <p className="concierge-note">No payment at this step. We will confirm flowers, timing and delivery personally.</p>
    </div>
  );
}
