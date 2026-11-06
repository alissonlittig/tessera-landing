import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, fmtDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on incident communication, uptime and running reliable software.",
  alternates: { canonical: "./" },
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Blog</p>
      <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">Notes on staying honest under pressure.</h1>
      <ul className="mt-14 divide-y divide-line border-y border-line">
        {posts.map((p) => (
          <li key={p.slug} className="relative py-8 transition hover:bg-card/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag} <span className="font-normal normal-case tracking-normal text-muted">· {fmtDate(p.date)} · {p.readingMinutes} min read</span></p>
            <h2 className="mt-2 font-display text-3xl leading-snug"><Link href={`/blog/${p.slug}/`} className="after:absolute after:inset-0">{p.title}</Link></h2>
            <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
