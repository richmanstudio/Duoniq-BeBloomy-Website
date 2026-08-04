"use client";

import { useMemo, useState } from "react";

const occasions = ["Just because", "Birthday", "Romance", "Event"];
const directions = ["Soft / tonal", "Clean / green", "Bright / expressive", "Florist’s choice"];
const timings = ["Today", "Tomorrow", "Choose a date", "I am flexible"];
const budgets = ["Up to €90", "€90–150", "€150+", "Let’s discuss"];

export function Concierge() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [direction, setDirection] = useState(directions[0]);
  const [timing, setTiming] = useState(timings[1]);
  const [budget, setBudget] = useState(budgets[1]);
  const [note, setNote] = useState("");

  const telegramUrl = useMemo(() => {
    const message = [
      "Hello BeBloomy! I would like help with a flower order.",
      "",
      `Occasion: ${occasion}`,
      `Direction: ${direction}`,
      `Timing: ${timing}`,
      `Budget: ${budget}`,
      note.trim() ? `Note: ${note.trim()}` : "",
      "",
      "Please contact me to confirm availability, composition and delivery details.",
    ].filter(Boolean).join("\n");

    return `https://t.me/BeBloomyCY?text=${encodeURIComponent(message)}`;
  }, [occasion, direction, timing, budget, note]);

  return (
    <div className="concierge-card">
      <div className="concierge-card-head">
        <span>Order brief</span>
        <span>01 / 04</span>
      </div>

      <ChoiceGroup title="What is the occasion?" items={occasions} value={occasion} onChange={setOccasion} />
      <ChoiceGroup title="Choose a direction" items={directions} value={direction} onChange={setDirection} />
      <ChoiceGroup title="When do you need it?" items={timings} value={timing} onChange={setTiming} />
      <ChoiceGroup title="Set a comfortable budget" items={budgets} value={budget} onChange={setBudget} />

      <label className="note-field">
        <span>Anything the florist should know?</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Favourite flowers, colours to avoid, delivery area…"
          rows={3}
        />
      </label>

      <a className="concierge-submit" href={telegramUrl} target="_blank" rel="noreferrer">
        Open Telegram with this brief <span>↗</span>
      </a>
      <p className="concierge-note">Review the message before sending. Final flowers and pricing are confirmed by the florist.</p>
    </div>
  );
}

function ChoiceGroup({
  title,
  items,
  value,
  onChange,
}: {
  title: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div className="choice-grid">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className={value === item ? "selected" : ""}
            aria-pressed={value === item}
            onClick={() => onChange(item)}
          >
            <span className="choice-indicator" aria-hidden="true" />
            {item}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
