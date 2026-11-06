import Link from "next/link";
import Logo from "./Logo";

const links = [
  ["Features", "/#features"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
  ["Blog", "/blog/"],
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Tessera home"><Logo /></Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map(([l, h]) => <Link key={l} href={h} className="transition hover:text-ink">{l}</Link>)}
        </nav>
        <div className="hidden md:block">
          <Link href="/#pricing" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep">Start free</Link>
        </div>
        <details className="relative md:hidden">
          <summary aria-label="Menu" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-card">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M3 6h12M3 12h12" /></svg>
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 top-12 w-56 rounded-2xl border border-line bg-card p-2 shadow-xl shadow-ink/10">
            {links.map(([l, h]) => <Link key={l} href={h} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-mint/50">{l}</Link>)}
            <Link href="/#pricing" className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white">Start free</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
