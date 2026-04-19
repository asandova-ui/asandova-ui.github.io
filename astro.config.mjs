import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const [repositoryOwner, repositoryName] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");

const isUserSite =
  repositoryName && repositoryOwner
    ? repositoryName === `${repositoryOwner}.github.io`
    : false;

const derivedBase =
  process.env.BASE_PATH ||
  (repositoryName && !isUserSite ? `/${repositoryName}` : "/");

const derivedSite =
  process.env.SITE_URL ||
  (repositoryName && repositoryOwner
    ? isUserSite
      ? `https://${repositoryOwner}.github.io/`
      : `https://${repositoryOwner}.github.io/${repositoryName}/`
    : "https://example.com/");

export default defineConfig({
  site: derivedSite,
  base: derivedBase,
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
