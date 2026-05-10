const links = [
  { href: "#hero", label: "ホーム" },
  { href: "#about-me", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-skyaccent/80 bg-white/40 backdrop-blur-2xl shadow-md shadow-skyaccent/10">
      <nav
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4"
        aria-label="メインナビゲーション"
      >
        <a
          href="#hero"
          className="text-sm font-bold tracking-wide text-hotpink transition-colors hover:text-chartreuse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hotpink"
        >
          Satsuki Dohi
        </a>
        <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm font-medium">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hotpink ${
                  i % 2 === 0
                    ? "text-neutral-700 hover:text-hotpink"
                    : "text-neutral-700 hover:text-skyaccent"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
