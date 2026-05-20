import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES, SITE, getServiceIdFromSlug } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/ypiresies", priority: "0.9", changefreq: "monthly" },
          { path: "/viografiko", priority: "0.8", changefreq: "monthly" },
          { path: "/contact", priority: "0.9", changefreq: "monthly" },
          { path: "/privacy", priority: "0.3", changefreq: "yearly" },
          { path: "/terms", priority: "0.3", changefreq: "yearly" },
          ...SERVICES.map((s) => ({
            path: `/ypiresies/${getServiceIdFromSlug(s.slug)}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${SITE.url}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
