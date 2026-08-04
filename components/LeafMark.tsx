export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M31.8 55.2C28.4 37.1 33.2 20.9 49.3 8.8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M47.9 9.8C35.2 10.6 27.1 18.2 26.9 30.8C39.4 30.4 47 22.6 47.9 9.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M31.9 44.6C23.4 34.4 13.8 31.7 4.9 36.2C11.1 46.9 21.1 50.1 31.9 44.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M31.3 43.7C24.2 42.3 18.1 40 11.1 37.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="31.5" cy="55.2" r="2.2" fill="currentColor" />
    </svg>
  );
}
