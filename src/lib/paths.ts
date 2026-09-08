const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!basePath || !path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://vergilum.github.io/aijamband";
}
