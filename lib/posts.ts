import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  readingMinutes: number;
};

function read(slug: string) {
  const raw = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  const meta: PostMeta = {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    tag: String(data.tag),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { meta, content };
}

export const getSlugs = () =>
  fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));

export const getPost = read;

export const getPosts = () =>
  getSlugs().map((s) => read(s).meta).sort((a, b) => b.date.localeCompare(a.date));

export const fmtDate = (d: string) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
