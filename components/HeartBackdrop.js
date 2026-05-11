/** Decorative hearts — fixed layer above illustration, below content */
const HEARTS = [
  { top: "14%", left: "7%", size: 18, rotate: "-14deg" },
  { top: "38%", left: "4%", size: 14, rotate: "8deg" },
  { top: "22%", right: "18%", size: 16, rotate: "-6deg" },
  { top: "58%", left: "12%", size: 15, rotate: "12deg" },
  { bottom: "26%", right: "11%", size: 17, rotate: "-10deg" },
  { top: "8%", right: "8%", size: 15, rotate: "15deg" },
  { top: "45%", right: "5%", size: 12, rotate: "-20deg" },
  { top: "75%", left: "6%", size: 19, rotate: "5deg" },
  { bottom: "15%", left: "18%", size: 14, rotate: "-15deg" },
  { bottom: "8%", right: "22%", size: 16, rotate: "10deg" },
  { top: "28%", left: "28%", size: 13, rotate: "-5deg" },
  { top: "68%", right: "25%", size: 20, rotate: "-18deg" },
  { bottom: "40%", left: "3%", size: 15, rotate: "22deg" },
  { bottom: "52%", right: "6%", size: 14, rotate: "-8deg" },
  { top: "88%", right: "14%", size: 17, rotate: "18deg" },

];

function HeartSvg({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#ff69b4"
      className="drop-shadow-sm"
      aria-hidden
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function HeartBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[4] overflow-hidden"
      aria-hidden
    >
      {HEARTS.map((h, i) => {
        const pos = {};
        if (h.top != null) pos.top = h.top;
        if (h.left != null) pos.left = h.left;
        if (h.right != null) pos.right = h.right;
        if (h.bottom != null) pos.bottom = h.bottom;
        return (
          <div
            key={i}
            className="absolute opacity-[0.42]"
            style={{
              ...pos,
              transform: `rotate(${h.rotate})`,
            }}
          >
            <HeartSvg size={h.size} />
          </div>
        );
      })}
    </div>
  );
}
