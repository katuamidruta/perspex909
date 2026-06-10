import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://perspex909.com",
  output: "static",
  integrations: [sitemap()]
});
