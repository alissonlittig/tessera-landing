"use client";
import { useState } from "react";

const plans = [
  { name: "Starter", m: 0, y: 0, hot: false, blurb: "For side projects and small teams getting started.", cta: "Start free", feats: ["1 public status page", "5 monitors, 5-minute checks", "Email subscribers up to 250", "Community support"] },
  { name: "Team", m: 29, y: 24, hot: true, blurb: "For product teams that need fast checks and clear updates.", cta: "Start 14-day trial", feats: ["5 status pages, custom domain", "50 monitors, 30-second checks", "Slack, Teams and webhook alerts", "Subscribers up to 10,000", "Incident templates and timelines"] },
  { name: "Scale", m: 99, y: 82, hot: false, blurb: "For companies with compliance and on-call needs.", cta: "Talk to sales", feats: ["Unlimited pages and monitors", "10-second checks, 6 regions", "SSO, audit log, role permissions", "Private status pages", "Priority support, 99.99% SLA"] },
];

const periods: [string, boolean][] = [["Monthly", false], ["Yearly · save 17%", true]];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="mx-auto flex w-fit items-center rounded-full border border-line bg-card p-1 text-sm font-medium" role="group" aria-label="Billing period">
        {periods.map(([l, v]) => (
          <button key={l} type="button" aria-pressed={yearly === v} onClick={() => setYearly(v)}
            className={`rounded-full px-4 py-2 transition ${yearly === v ? "bg-ink text-white" : "text-muted hover:text-ink"}`}>{l}</button>
        ))}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
        {plans.map((p) => (
          <article key={p.name} className={`relative flex flex-col rounded-3xl border p-7 ${p.hot ? "border-brand bg-ink text-white shadow-2xl shadow-brand/20" : "border-line bg-card"}`}>
            {p.hot && <span className="absolute -top-3 left-7 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-brand-deep">Most popular</span>}
            <h3 className="font-display text-3xl">{p.name}</h3>
            <p className={`mt-2 text-sm leading-relaxed lg:min-h-[3rem] ${p.hot ? "text-white/80" : "text-muted"}`}>{p.blurb}</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-5xl font-semibold tracking-tight">${yearly ? p.y : p.m}</span>
              <span className={`text-sm ${p.hot ? "text-white/80" : "text-muted"}`}>/ month{p.m > 0 && yearly ? ", billed yearly" : ""}</span>
            </p>
            <ul className="mt-7 flex-1 space-y-3 text-sm">
              {p.feats.map((f) => (
                <li key={f} className="flex gap-3">
                  <svg className={`mt-0.5 shrink-0 ${p.hot ? "text-mint" : "text-brand"}`} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 8.5 3.2 3L13 4.5" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#pricing" className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${p.hot ? "bg-mint text-brand-deep hover:bg-white" : "bg-ink text-white hover:bg-brand-deep"}`}>{p.cta}</a>
          </article>
        ))}
      </div>
    </div>
  );
}
