import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">Status pages and incident communication for teams that ship every day.</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Product</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#features" className="hover:underline">Features</Link></li>
            <li><Link href="/#pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/#faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/blog/" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">About this demo</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">Tessera is a fictional product. Every name, price and metric on this page is made up for a portfolio piece.</p>
          <a href="https://alissonlittig.github.io/" className="mt-3 inline-block text-sm font-medium text-brand underline-offset-4 hover:underline">Back to the portfolio</a>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">© 2026 Tessera (fictional). Built with Next.js, TypeScript and Tailwind CSS.</div>
    </footer>
  );
}
