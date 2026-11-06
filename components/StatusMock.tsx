const services = [
  { name: "API", up: "99.99%", bad: [] as number[] },
  { name: "Dashboard", up: "99.97%", bad: [41] },
  { name: "Webhooks", up: "99.92%", bad: [18, 19, 52] },
  { name: "Billing", up: "100%", bad: [] as number[] },
];

export default function StatusMock() {
  return (
    <div role="img" aria-label="Illustration of a Tessera status page: four services operational with 60-day uptime bars" className="relative rounded-3xl border border-line bg-card p-4 shadow-2xl shadow-ink/10 sm:p-6">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-mint/60 px-4 py-3">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-deep">
          <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-brand" />All systems operational
        </div>
        <span className="hidden text-xs text-brand-deep/80 sm:block">Updated 42s ago</span>
      </div>
      <ul className="mt-5 space-y-4" aria-hidden="true">
        {services.map((s) => (
          <li key={s.name}>
            <div className="mb-1.5 flex justify-between text-xs font-medium"><span>{s.name}</span><span className="text-muted">{s.up}</span></div>
            <div className="flex h-7 gap-[2px]">
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i} className={`flex-1 rounded-[2px] ${s.bad.includes(i) ? "bg-amber/80" : "bg-brand/80"}`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex justify-between text-[11px] text-muted" aria-hidden="true"><span>60 days ago</span><span>Today</span></div>
      <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-line bg-card px-4 py-3 shadow-xl shadow-ink/10 sm:block md:-left-8" aria-hidden="true">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-amber">Resolved</p>
        <p className="mt-0.5 text-sm font-medium">Webhook delays · 14 min</p>
      </div>
    </div>
  );
}
