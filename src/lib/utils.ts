export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

export function withBase(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

  return path === "/" ? `${base}/` || "/" : `${base}${path}`;
}

export function compareByOrder<T extends { data: { order?: number } }>(a: T, b: T) {
  return (a.data.order ?? 0) - (b.data.order ?? 0);
}

export function compareByDate<T extends { data: { publishDate: Date } }>(a: T, b: T) {
  return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}

export function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}
