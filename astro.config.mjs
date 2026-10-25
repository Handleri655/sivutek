import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

function hasPublicReferences() {
  try {
    const dir = join(process.cwd(), "src/content/referenssit");
    return readdirSync(dir)
      .filter((name) => name.endsWith(".md"))
      .some((name) => {
        const frontmatter = readFileSync(join(dir, name), "utf8").split("---")[1] ?? "";
        return /placeholder:\s*false/.test(frontmatter);
      });
  } catch {
    return false;
  }
}

const showReferences = hasPublicReferences();

export default defineConfig({
  site: "https://www.sivutek.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes("/kiitos")) return false;
        if (!showReferences && page.includes("/referenssit")) return false;
        return true;
      },
    }),
  ],
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
});
