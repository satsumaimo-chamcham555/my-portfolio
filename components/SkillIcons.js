/** Skill visuals — VS Code / Unity: SVG marks. Java: wordmark badge (recognizable brand treatment). */

export function JavaWordMark({ className }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-[#f89820] shadow-sm ring-1 ring-black/5 ${className ?? ""}`}
      aria-label="Java"
    >
      <span className="font-serif text-[13px] font-bold tracking-wide text-white">
        Java
      </span>
    </div>
  );
}

export function VSCodeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#007ACC"
        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
      />
    </svg>
  );
}

export function UnityIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 2.18 6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm16 0v7.36l-7 3.5v-7.36l7-3.5z"
      />
    </svg>
  );
}

export function GarageBandMark({ className }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg ring-2 ring-white/60 ${className ?? ""}`}
      aria-label="GarageBand"
    >
      <svg
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    </div>
  );
}
