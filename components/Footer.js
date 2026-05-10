export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-chartreuse/40 bg-white/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-700 sm:flex-row">
        <p className="font-medium text-hotpink">
          © {new Date().getFullYear()} Satsuki Dohi
        </p>
        <p className="text-center text-neutral-600 sm:text-right">
          津田塾大学 学芸学部 情報科学科
        </p>
      </div>
    </footer>
  );
}
