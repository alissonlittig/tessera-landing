import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <p className="font-display text-7xl text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl">This page is not operational.</h1>
      <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">Back to home</Link>
    </div>
  );
}
