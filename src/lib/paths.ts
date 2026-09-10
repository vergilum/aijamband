export function withBasePath(path: string) {
  return path;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://aijamband.ru";
}
