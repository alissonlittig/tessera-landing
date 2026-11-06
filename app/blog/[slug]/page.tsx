import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPost, getSlugs, fmtDate } from "@/lib/posts";
import { SITE_URL, asset } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getSlugs().map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) return {};
  const { meta } = getPost(slug);
  const url = `${SITE_URL}/blog/${slug}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: meta.title, description: meta.description, url, publishedTime: meta.date, images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [`${SITE_URL}/og.png`] },
  };
}

const components = {
  Callout: ({ children }: { children: React.ReactNode }) => (
    <aside className="not-prose my-8 rounded-2xl border border-brand/25 bg-mint/50 p-5 text-[15px] leading-relaxed text-brand-deep">{children}</aside>
  ),
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();
  const { meta, content } = getPost(slug);
  const ld = { "@context": "https://schema.org", "@type": "BlogPosting", headline: meta.title, description: meta.description, datePublished: meta.date, author: { "@type": "Organization", name: "Tessera" } };
  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Link href="/blog/" className="text-sm font-medium text-brand underline-offset-4 hover:underline">← All posts</Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">{meta.tag}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{meta.title}</h1>
      <p className="mt-4 text-sm text-muted">{fmtDate(meta.date)} · {meta.readingMinutes} min read</p>
      <div className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:font-normal prose-h2:mt-12 prose-h2:text-3xl prose-a:text-brand prose-blockquote:border-brand prose-blockquote:font-display prose-blockquote:text-2xl prose-blockquote:not-italic prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-mint/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.85em] prose-pre:bg-ink prose-p:text-ink/85 prose-li:text-ink/85">
        <MDXRemote source={content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
