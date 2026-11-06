import Link from "next/link";
import StatusMock from "@/components/StatusMock";
import Pricing from "@/components/Pricing";
import { getPosts, fmtDate } from "@/lib/posts";

const features = [
  { t: "Checks every 30 seconds, or 10 on Scale", d: "HTTP, TCP, DNS and heartbeat monitors from six regions, with a second opinion before anyone is paged.", n: "01" },
  { t: "Incident timelines", d: "Post an update in two clicks. Templates keep the tone calm and the wording consistent across the team.", n: "02" },
  { t: "Subscribers, not noise", d: "Customers follow only the components they use, by email, Slack or webhook. No blanket blasts.", n: "03" },
  { t: "Your domain, your look", d: "Custom domain, logo and colors. The page loads from the edge in under 200 ms, even during an outage.", n: "04" },
  { t: "Metrics you can show", d: "Public uptime, response time and incident history for the last 90 days, exportable as CSV.", n: "05" },
  { t: "Built for audits", d: "SSO, role permissions and a full audit log. Every change to a page is recorded and reversible.", n: "06" },
];

const faqs = [
  ["Do I need a credit card to start?", "No. The Starter plan is free forever and the Team trial runs 14 days without a card. You only add billing details if you decide to keep Team."],
  ["Will the status page stay up if my own infrastructure is down?", "Yes. Status pages are served from a separate edge network with its own DNS, so they keep loading when your application does not."],
  ["Can customers subscribe to only part of my product?", "Yes. You group services into components, and subscribers pick the ones they care about. They only hear about incidents that affect them."],
  ["How do I move from another status page tool?", "Import your components and subscriber list from a CSV, or use the migration endpoint. Most teams are live in under an hour, and past incidents can be imported with their original dates."],
  ["What happens if I exceed my plan limits?", "Monitors keep running and we send you a warning. Nothing is switched off without notice, and you can upgrade or trim monitors at any time."],
  ["Is this a real product?", "No. Tessera is a fictional SaaS created as a design and front-end exercise. Prices, logos and numbers are invented."],
];

const stats = [["99.99%", "median page uptime"], ["< 200 ms", "global page load"], ["6 regions", "probing your services"], ["14 min", "average time to first update"]];

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-brand-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />Now with 10-second checks
            </p>
            <h1 className="mt-6 font-display text-[3.1rem] leading-[1.02] tracking-tight sm:text-7xl">
              When things break, <em className="text-brand">tell people first.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Tessera watches your services and keeps a calm, honest status page for your customers. Fewer support tickets during incidents, more trust after them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#pricing" className="rounded-full bg-ink px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep">Start free, no card</Link>
              <Link href="/blog/" className="rounded-full border border-ink/20 bg-card px-7 py-3.5 text-center text-sm font-semibold transition hover:border-ink">Read the blog</Link>
            </div>
            <p className="mt-5 text-sm text-muted">Free plan forever · Set up in about 5 minutes</p>
          </div>
          <StatusMock />
        </div>
      </section>

      <section aria-label="Key numbers" className="border-y border-line bg-card">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 lg:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="text-center">
              <dt className="sr-only">{l}</dt>
              <dd className="font-display text-4xl sm:text-5xl">{v}</dd>
              <dd className="mt-1 text-sm text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Features</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Everything an incident needs, nothing it does not.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.n} className="bg-paper p-8 transition hover:bg-card">
              <span className="font-display text-2xl text-brand">{f.n}</span>
              <h3 className="mt-6 text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-mint/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Pricing</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Simple plans that grow with your team.</h2>
            <p className="mt-4 text-muted">Prices in USD. All plans include unlimited incident updates.</p>
          </div>
          <div className="mt-10"><Pricing /></div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">FAQ</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Questions, answered.</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-base font-semibold">
                {q}
                <svg className="chev shrink-0 text-brand transition-transform" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M9 3v12M3 9h12" /></svg>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card py-24" aria-labelledby="latest">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-6">
            <h2 id="latest" className="font-display text-4xl sm:text-5xl">From the blog</h2>
            <Link href="/blog/" className="text-sm font-semibold text-brand underline-offset-4 hover:underline">All posts</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="group flex flex-col rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
                <h3 className="mt-3 font-display text-2xl leading-snug"><Link href={`/blog/${p.slug}/`} className="after:absolute after:inset-0 relative">{p.title}</Link></h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <p className="mt-5 text-xs text-muted">{fmtDate(p.date)} · {p.readingMinutes} min read</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-ink px-8 py-16 text-center text-white">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Your next incident is a chance to earn trust.</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Set up your status page today and be ready before you need it.</p>
          <Link href="/#pricing" className="mt-8 inline-block rounded-full bg-mint px-8 py-3.5 text-sm font-semibold text-brand-deep transition hover:bg-white">Start free</Link>
        </div>
      </section>
    </>
  );
}
