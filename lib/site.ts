export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_URL = "https://alissonlittig.github.io/tessera-landing";
export const asset = (p: string) => `${BASE}${p}`;
