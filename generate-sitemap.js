import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const baseUrl = "https://alphaarena.netlify.app";

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/programs", changefreq: "weekly", priority: 0.7 },
  { url: "/plans", changefreq: "weekly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  { url: "/testimonials", changefreq: "monthly", priority: 0.6 },
];

const sitemapStream = new SitemapStream({ hostname: baseUrl });

streamToPromise(sitemapStream)
  .then(() => console.log("✅ Sitemap generated successfully."))
  .catch(console.error);

const writeStream = createWriteStream("./public/sitemap.xml");
sitemapStream.pipe(writeStream);

urls.forEach((url) => sitemapStream.write(url));

sitemapStream.end();
